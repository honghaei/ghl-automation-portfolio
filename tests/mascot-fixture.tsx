// Development-only controlled HTMLMediaElement fixture. Never imported by App.
import React from 'react'
import { createRoot } from 'react-dom/client'
import TalkingMascot from '../src/components/mascot/TalkingMascot'
import { AUDIO_TRACKS } from '../src/components/mascot/audioTimeline'
const mode = new URLSearchParams(location.search).get('mode') || 'allowed'
const stats = { plays: 0, pauses: 0, active: 0, maxActive: 0, elements: 0 }
type State = { at: number; start: number; paused: boolean; ended: boolean; error: {code:number}|null; timer?: number }
const map = new WeakMap<HTMLMediaElement, State>()
const state = (e: HTMLMediaElement) => {
  let s = map.get(e)
  if (!s) { s = {at:0,start:performance.now(),paused:true,ended:false,error:null}; map.set(e,s); stats.elements++ }
  return s
}
const duration = (e: HTMLMediaElement) => AUDIO_TRACKS[e.src.includes('inquiry') ? 'inquiry' : 'intro'].duration
const rate = 4
const time = (e: HTMLMediaElement) => { const s=state(e); return Math.min(duration(e),s.at+(s.paused?0:(performance.now()-s.start)/1000*rate)) }
if (mode === 'native-broken') AUDIO_TRACKS.intro.src = '/assets/mascot/audio/v16.2/missing-fixture.mp3'
if (!mode.startsWith('native')) {
  const proto=HTMLMediaElement.prototype
  Object.defineProperties(proto, {
    currentTime:{configurable:true,get(){return time(this)},set(t:number){const s=state(this);s.at=t;s.start=performance.now();this.dispatchEvent(new Event('timeupdate'))}},
    duration:{configurable:true,get(){return duration(this)}},
    paused:{configurable:true,get(){return state(this).paused}},
    ended:{configurable:true,get(){return state(this).ended}},
    error:{configurable:true,get(){return state(this).error}},
    currentSrc:{configurable:true,get(){return this.src}},
  })
  proto.load=function(){const s=state(this);window.clearInterval(s.timer);s.at=0;s.start=performance.now();s.paused=true;s.ended=false;s.error=null;stats.active=0}
  proto.pause=function(){const s=state(this);s.at=time(this);s.paused=true;window.clearInterval(s.timer);stats.pauses++;stats.active=0;this.dispatchEvent(new Event('pause'))}
  proto.play=function(){const e=this,s=state(e);stats.plays++;
    if(mode==='denied')return Promise.reject(Object.assign(new Error('policy'),{name:'NotAllowedError'}))
    if(mode==='broken'){s.error={code:4};e.dispatchEvent(new Event('error'));return Promise.reject(new Error('missing file'))}
    s.paused=false;s.ended=false;s.start=performance.now();stats.active++;stats.maxActive=Math.max(stats.maxActive,stats.active)
    window.clearInterval(s.timer)
    s.timer=window.setInterval(()=>{if(time(e)>=duration(e)){s.at=duration(e);s.paused=true;s.ended=true;stats.active=0;window.clearInterval(s.timer);e.dispatchEvent(new Event('ended'))}else e.dispatchEvent(new Event('timeupdate'))},25)
    e.dispatchEvent(new Event('playing'));return Promise.resolve()
  }
}
Object.defineProperty(window,'qaMedia',{value:stats})
const reactRoot=createRoot(document.getElementById('test-root')!)
const render=()=>reactRoot.render(<React.StrictMode><TalkingMascot/></React.StrictMode>)
render()
const unmount=document.createElement('button');unmount.textContent='Unmount mascot';unmount.id='unmount';unmount.onclick=()=>reactRoot.unmount();document.body.append(unmount)
const rerender=document.createElement('button');rerender.textContent='Rerender mascot';rerender.id='rerender';rerender.onclick=render;document.body.append(rerender)
document.body.style.minHeight='2200px'
