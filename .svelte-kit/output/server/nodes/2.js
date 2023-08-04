

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9f9d14f8.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.9b15e87e.js"];
export const stylesheets = ["_app/immutable/assets/2.1e805e49.css"];
export const fonts = [];
