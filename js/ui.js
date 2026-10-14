export const colors=['c0','c1','c2','c3','c4','c5','c6','c7'];
export const shuffle=(items,rng=Math.random)=>{const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out};
export function uniqueOptions(target,pool,count=4,rng=Math.random){const rest=[...new Set(pool.map(String))].filter(x=>x!==String(target));return shuffle([String(target),...shuffle(rest,rng).slice(0,Math.max(0,count-1))],rng)}
export const title=(icon,heading,copy='')=>`<div class="title"><div class="ico">${icon}</div><h1>${heading}</h1>${copy?`<p>${copy}</p>`:''}</div>`;
export const answerButtons=(values,target=null)=>`<div class="answers">${values.map((v,i)=>`<button class="answer ${colors[i%8]}" data-answer="${typeof v==='object'?v.id:v}">${typeof v==='object'?v.label:v}</button>`).join('')}</div>`;
export function avatarHTML(profile){const files=Object.values(profile.avatar?.equipped||{}).filter(Boolean);return `<div class="avatar" aria-label="Avatar">${files.map(id=>`<img src="assets/avatar/${id}.svg" alt="">`).join('')}</div>`}
export function confetti(doc=document){const d=doc.createElement('div');d.className='confetti';['⭐','✨','🎉','🌈'].forEach((x,i)=>{const z=doc.createElement('i');z.textContent=x;z.style.left=(15+i*22)+'vw';z.style.animationDelay=i*.08+'s';d.append(z)});doc.body.append(d);setTimeout(()=>d.remove(),1900)}
