export function createRewards(profileService){const commit=p=>profileService.save(p);return{
 earn(amount=1){const p=profileService.get();p.stars+=Math.max(0,Number(amount)||0);commit(p);return p.stars},
 canAfford(cost){return profileService.get().stars>=Number(cost)},
 spend(cost){cost=Math.max(0,Number(cost)||0);if(!this.canAfford(cost))return false;const p=profileService.get();p.stars-=cost;commit(p);return true},
 unlock(id){const p=profileService.get();if(!p.unlocks.includes(id))p.unlocks.push(id);commit(p);return true},
 own(id){const p=profileService.get();if(!p.inventory.includes(id))p.inventory.push(id);commit(p);return true}
}}
