import { test } from 'node:test'
import assert from 'node:assert/strict'
import { INTRO_LINES, INQUIRY, initialState, mascotReducer as reduce, poseFor, introFinished, captionDuration, shapeFor } from './.compiled/mascotModel.js'
test('approved script is preserved word for word', () => {
  assert.equal(INTRO_LINES.map(l=>l.text).join(' '), "Hi! I'm Charles Jacob Lat. I'm a GoHighLevel specialist, automation specialist, web developer, and app developer. I build practical systems that help businesses work smarter, save time, and grow. Explore my projects to see what I've built!")
  assert.equal(INQUIRY, "Have a project in mind or a question? I'd love to hear from you! Send me a message.")
})
test('inquiry cannot open at any initial introduction step, including idle', () => {
  for (let step=-1;step<INTRO_LINES.length;step++) {
    const s={step,inquiry:false}; assert.deepEqual(reduce(s,{type:'open'}),s)
    assert.equal(introFinished(s),false)
  }
})
test('sequence completes in the approved order and returns to idle', () => {
 let s=initialState;const poses=[poseFor(s)];s=reduce(s,{type:'start'});poses.push(poseFor(s))
 for(let i=0;i<4;i++){s=reduce(s,{type:'advance'});poses.push(poseFor(s))}
 assert.deepEqual(poses,['idle','greeting','explaining','explaining','closing','idle']);assert.ok(introFinished(s));assert.equal(s.inquiry,false)
})
test('after completion, inquiry is opt-in and can be dismissed', () => {
 const s={step:4,inquiry:false};const open=reduce(s,{type:'open'});assert.equal(poseFor(open),'thinking');assert.equal(poseFor(reduce(open,{type:'close'})),'idle')
})
test('duplicate start does not restart an active introduction', () => {const s={step:2,inquiry:false};assert.deepEqual(reduce(s,{type:'start'}),s)})
test('caption fallback is within requested 10–20 second range', () => {const ms=INTRO_LINES.reduce((n,l)=>n+captionDuration(l.text),650);assert.ok(ms>=10000 && ms<=20000,`${ms}ms`)})
test('mouth rig covers multiple shapes and punctuation rests', () => {
 const seen=new Set();for(const [i,c] of [...'aeioubpfv x!'].entries())seen.add(shapeFor(c,0,i))
 assert.ok(seen.size>=6);assert.equal(shapeFor('!',0,1),'rest');assert.equal(shapeFor('p',0,1),'mbp')
})
