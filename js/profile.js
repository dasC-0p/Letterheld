const PROFILE_KEY='letterheld.profile';
export const DEFAULT_PROFILE={schemaVersion:1,name:'',avatar:{symbol:null,equipped:{base:'base-hero',color:'color-blue',background:'bg-sky'}},stars:0,inventory:[],settings:{uiLanguage:'nl-BE',learningLanguage:'nl-BE',difficulty:'normal',displaySize:'normal',speechRate:.88,speechEnabled:true,soundEnabled:true},progress:{},unlocks:[]};
const clone=x=>JSON.parse(JSON.stringify(x));
function safeJSON(value,fallback){try{return JSON.parse(value)}catch{return fallback}}
export function migrateLegacy(store){
  const raw=store.get(PROFILE_KEY,null); if(raw){const parsed=safeJSON(raw,null);if(parsed)return normalizeProfile(parsed)}
  const legacyName=store.get('name',''); const legacySymbol=safeJSON(store.get('symbol','null'),null); const legacyStars=Number(store.get('stars','0'))||0; const owned=safeJSON(store.get('owned','[]'),[]);
  const p=clone(DEFAULT_PROFILE);p.name=legacyName||'';p.avatar.symbol=legacySymbol;p.stars=Math.max(0,legacyStars);p.inventory=Array.isArray(owned)?owned.map(i=>`legacy-${i}`):[];
  if(p.name||p.avatar.symbol||p.stars||p.inventory.length)store.set(PROFILE_KEY,JSON.stringify(p));
  return p
}
export function normalizeProfile(input){
  const p=clone(DEFAULT_PROFILE), src=input&&typeof input==='object'?input:{};
  Object.assign(p,src);p.avatar={...clone(DEFAULT_PROFILE.avatar),...(src.avatar||{}),equipped:{...DEFAULT_PROFILE.avatar.equipped,...(src.avatar?.equipped||{})}};
  p.settings={...DEFAULT_PROFILE.settings,...(src.settings||{})};p.progress={...(src.progress||{})};p.inventory=Array.isArray(src.inventory)?src.inventory:[];p.unlocks=Array.isArray(src.unlocks)?src.unlocks:[];p.stars=Math.max(0,Number(src.stars)||0);p.schemaVersion=1;return p
}
export function createProfileService(store){let profile=migrateLegacy(store);const save=()=>store.set(PROFILE_KEY,JSON.stringify(profile));return{
 get:()=>profile, save(next){profile=normalizeProfile(next);save();return profile}, patch(changes){profile=normalizeProfile({...profile,...changes});save();return profile},
 reset(scope){if(scope==='progress')profile.progress={};else if(scope==='rewards'){profile.stars=0;profile.inventory=[];profile.unlocks=[];profile.avatar.equipped={...DEFAULT_PROFILE.avatar.equipped}}else{profile=clone(DEFAULT_PROFILE)}save();return profile}, key:PROFILE_KEY
}}
