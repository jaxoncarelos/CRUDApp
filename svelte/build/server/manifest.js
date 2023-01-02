const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blank.webp","favicon.png"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-54334daa.js","imports":["_app/immutable/start-54334daa.js","_app/immutable/chunks/index-020402b1.js","_app/immutable/chunks/singletons-fb61ab81.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3e8a1705.js'),
			() => import('./chunks/1-a338529b.js'),
			() => import('./chunks/2-bb2334dd.js'),
			() => import('./chunks/3-77ca1cd5.js'),
			() => import('./chunks/4-668c5c58.js'),
			() => import('./chunks/5-a160f1be.js'),
			() => import('./chunks/6-b8477e46.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/profile/[username]",
				pattern: /^\/profile\/([^/]+?)\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
