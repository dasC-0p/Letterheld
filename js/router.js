export function createRouter(onChange,win=globalThis){let route='home';const read=()=>decodeURIComponent((win.location?.hash||'#home').slice(1)||'home');const notify=()=>{route=read();onChange(route)};return{
 start(){win.addEventListener?.('hashchange',notify);notify()},go(next){if(win.location)win.location.hash=next;else{route=next;onChange(route)}},back(){win.history?.back?.()},current:()=>route,parts:()=>route.split('/')
}}
