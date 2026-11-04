import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isTourPlaying, setTourPlaying, subscribeTourPriority } from './.compiled/tour/tourAudioPriority.js'
import { PlaybackController } from './.compiled/PlaybackController.js'
class Media extends EventTarget {
  src='';currentTime=0;duration=15.49;paused=true;ended=false;error=null;playbackRate=1;plays=0
  load(){this.currentTime=0;this.paused=true;this.ended=false}
  pause(){this.paused=true;this.dispatchEvent(new Event('pause'))}
  play(){this.plays++;this.paused=false;this.dispatchEvent(new Event('playing'));return Promise.resolve()}
}
test('tour priority stops an active real controller and releasing never resumes narration',()=>{
 setTourPlaying(false);const media=new Media(),c=new PlaybackController(media,{autoTick:false});c.enableVoice();media.currentTime=6;c.sample()
 const remove=subscribeTourPriority(active=>{if(active)c.mute()});setTourPlaying(true)
 assert.equal(media.paused,true);assert.equal(c.snapshot().voiceEnabled,false);assert.equal(c.playbackFrame().active,false);assert.equal(isTourPlaying(),true)
 setTourPlaying(false);assert.equal(media.plays,1);assert.equal(media.paused,true)
 c.enableVoice();assert.equal(media.currentTime,0);assert.equal(media.plays,2);remove();c.destroy();setTourPlaying(false)
})
test('mounting a listener during tour playback immediately suppresses mascot audio',()=>{
 setTourPlaying(true);const media=new Media(),c=new PlaybackController(media,{autoTick:false});c.enableVoice()
 const remove=subscribeTourPriority(active=>{if(active)c.mute()});assert.equal(media.paused,true);assert.equal(c.snapshot().voiceEnabled,false)
 remove();c.destroy();setTourPlaying(false)
})
test('rapid tour play/pause notifications do not restart or overlap the mascot transport',()=>{
 setTourPlaying(false);const media=new Media(),c=new PlaybackController(media,{autoTick:false});c.enableVoice()
 const remove=subscribeTourPriority(active=>{if(active)c.mute()});for(let i=0;i<30;i++){setTourPlaying(true);setTourPlaying(true);setTourPlaying(false)}
 assert.equal(media.plays,1);assert.equal(media.paused,true);assert.equal(c.playbackFrame().active,false)
 remove();c.destroy();setTourPlaying(false)
})
test('unsubscribed mascot receives no further tour events after route cleanup',()=>{
 setTourPlaying(false);const events=[];const remove=subscribeTourPriority(active=>events.push(active));remove();setTourPlaying(true);setTourPlaying(false);assert.deepEqual(events,[false])
})
