export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7b792f55.js","app":"_app/immutable/entry/app.19155844.js","imports":["_app/immutable/entry/start.7b792f55.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.53afc25b.js","_app/immutable/entry/app.19155844.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.9b15e87e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
