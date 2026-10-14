const LEVELS={easy:{letterChoices:2,numberChoices:2,maxNumber:10,mathMax:5,maxFactor:3},normal:{letterChoices:4,numberChoices:4,maxNumber:20,mathMax:10,maxFactor:5},hard:{letterChoices:6,numberChoices:6,maxNumber:100,mathMax:20,maxFactor:10}};
export function createDifficulty(profileService,moduleDefaults={}){const overrides=new Map();return{
 setOverride(id,value){value==null?overrides.delete(id):overrides.set(id,value)},
 getDifficulty(exerciseId,moduleId){const level=profileService.get().settings.difficulty||'normal';return{...LEVELS[level],...(moduleDefaults[moduleId]||{}),...(overrides.get(exerciseId)||{})}}, levels:LEVELS
}}
