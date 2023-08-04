

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.164f344b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.9b15e87e.js","_app/immutable/chunks/singletons.53afc25b.js"];
export const stylesheets = [];
export const fonts = [];
