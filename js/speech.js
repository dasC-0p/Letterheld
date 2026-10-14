export function createSpeech(adapter=globalThis){let last='';let options={locale:'nl-BE',rate:.88,enabled:true};return{
 configure(next={}){options={...options,...next}},
 speak(text,opts={}){last=String(text||'');if(!last||opts.enabled===false||options.enabled===false)return false;const synth=adapter?.speechSynthesis,Utterance=adapter?.SpeechSynthesisUtterance;if(!synth||!Utterance)return false;try{synth.cancel();const u=new Utterance(last);u.lang=opts.locale||options.locale;u.rate=opts.rate||options.rate;synth.speak(u);return true}catch{return false}},
 speakSound(text,opts={}){return this.speak(text,{...opts,rate:opts.rate||.68})},repeat(){return last?this.speak(last):false},stop(){try{adapter?.speechSynthesis?.cancel()}catch{}},last:()=>last
}}
export const Speech=createSpeech();
