const modules=new Map();
export function registerModule(module){if(!module?.id||!module?.titleKey||!module?.create)throw new Error('Ongeldige module');if(modules.has(module.id))throw new Error(`Dubbele module-id: ${module.id}`);modules.set(module.id,module);return module}
export function getModule(id){return modules.get(id)}
export function listModules(){return [...modules.values()].sort((a,b)=>(a.order||99)-(b.order||99))}
export function clearRegistry(){modules.clear()}
