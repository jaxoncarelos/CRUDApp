const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blank.webp","favicon.png","smui-dark.css","smui.css"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-637e1326.js","imports":["_app/immutable/start-637e1326.js","_app/immutable/chunks/index-c434c163.js","_app/immutable/chunks/singletons-8f54ed48.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-148c47ce.js'),
			() => import('./chunks/1-44693607.js'),
			() => import('./chunks/2-3478fe82.js'),
			() => import('./chunks/3-64d36cc7.js'),
			() => import('./chunks/4-321b4b64.js'),
			() => import('./chunks/5-c25e8a09.js'),
			() => import('./chunks/6-55e19ef3.js')
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
