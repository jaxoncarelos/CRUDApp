const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blank.webp","favicon.png"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-50b275e2.js","imports":["_app/immutable/start-50b275e2.js","_app/immutable/chunks/index-020402b1.js","_app/immutable/chunks/singletons-fb61ab81.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-604640f5.js'),
			() => import('./chunks/1-a338529b.js'),
			() => import('./chunks/2-ce57b15a.js'),
			() => import('./chunks/3-b6d7db5f.js'),
			() => import('./chunks/4-a0f5af25.js'),
			() => import('./chunks/5-34d958c7.js'),
			() => import('./chunks/6-0c5b5cd3.js')
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
