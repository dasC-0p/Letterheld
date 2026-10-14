import {uniqueOptions} from '../../js/ui.js';
export function numberQuestion(round,{maxNumber=10,numberChoices=4}={},rng=Math.random){const target=(round*7+2)%(maxNumber+1);return{target,options:uniqueOptions(target,Array.from({length:maxNumber+1},(_,i)=>i),numberChoices,rng)}}
