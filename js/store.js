export function createStore(storage){
  const memory=new Map(); let backend=storage;
  if(backend===undefined){try{backend=globalThis.localStorage;const k='__letterheld_probe__';backend.setItem(k,'1');backend.removeItem(k)}catch{backend=null}}
  return {
    get(key,fallback=null){try{const value=backend?.getItem(key);return value===null||value===undefined?(memory.has(key)?memory.get(key):fallback):value}catch{return memory.has(key)?memory.get(key):fallback}},
    set(key,value){const text=String(value);try{if(backend){backend.setItem(key,text);return true}}catch{}memory.set(key,text);return false},
    remove(key){try{backend?.removeItem(key)}catch{}memory.delete(key)},
    reset(keys){(keys||[]).forEach(key=>this.remove(key))},
    isPersistent(){return Boolean(backend)}
  }
}
export const Store=createStore();
