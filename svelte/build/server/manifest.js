const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blank.webp","favicon.png","smui-dark.css","smui.css"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-642bf430.js","imports":["_app/immutable/start-642bf430.js","_app/immutable/chunks/index-020402b1.js","_app/immutable/chunks/singletons-fb61ab81.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-c4296ddb.js'),
			() => import('./chunks/1-a338529b.js'),
			() => import('./chunks/2-c1b3a651.js'),
			() => import('./chunks/3-f1bc5691.js'),
			() => import('./chunks/4-67d6e506.js'),
			() => import('./chunks/5-ff7e9600.js'),
			() => import('./chunks/6-2cf4861d.js')
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
