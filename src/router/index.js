import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
		path: '/',
		name: 'home',
		component: () => import("@/page/Home")
	},
	{
		path:'/news',
		name:'news',
		component: () => import("@/views/News"),
	},
	{
		path:'/navigation',
		name:'navigation',
		component: () => import("@/views/Navigation"),
	},
	{
		path:'/market',
		name:'marketplace',
		component: () => import("@/views/Market"),
	},
	{
		path: '/user',
		name: 'user',
		component: () => import("@/page/User"),
		children: [{
				path: '',
				redirect: '/balance'
			},
			{
				path: '/balance',
				name: 'balance',
				component: () => import("@/views/user/Balance"),
			},
			{
				path: '/nfts',
				name: 'nfts',
				component: () => import("@/views/user/NFTs"),
			},
			{
				path: '/rofile',
				name: 'profile',
				component: () => import("@/views/user/Profile"),
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});
export default router;