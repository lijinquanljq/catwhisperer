import vueRouter from 'vue-router'
import index from '../../components/index/index.vue'
import cats from '../../components/index/cats.vue'
import shop from '../../components/index/shop.vue'
import my from '../../components/index/my.vue'
import catzx from '../../components/index/catzx.vue'
import cathd from '../../components/index/cathd.vue'
import catfx from '../../components/index/catfx.vue'
import catxs from '../../components/index/catxs.vue'
import jjzj from '../../components/index/jjzj.vue'
import mryl from '../../components/index/mryl.vue'
import zmy from '../../components/index/zmy.vue'
import bksp from '../../components/index/bksp.vue'
import hospital from '../../components/index/hospital.vue'
import txtone from '../../components/txt/txtone.vue'
import txttwo from '../../components/txt/txttwo.vue'
import txtthree from '../../components/txt/txtthree.vue'
import txtfour from '../../components/txt/txtfour.vue'
import txtfive from '../../components/txt/txtfive.vue'
import txtsix from '../../components/txt/txtsix.vue'
import comone from '../../components/commodity/comone.vue'
import catsone from '../../components/cats/catsone.vue'
import catstwo from '../../components/cats/catstwo.vue'
import catsthree from '../../components/cats/catsthree.vue'
import ml from '../../components/menu/ml.vue'
import toy from '../../components/menu/toy.vue'
import wash from '../../components/menu/wash.vue'
import nest from '../../components/menu/nest.vue'
import pzbk from '../../components/menu/pzbk.vue'
import all from '../../components/menu/all.vue'
import long from '../../components/menu/long.vue'
import short from '../../components/menu/short.vue'
import small from '../../components/menu/small.vue'
import middle from '../../components/menu/middle.vue'
import zh from '../../components/menu/zh.vue'
import rq from '../../components/menu/rq.vue'
import jl from '../../components/menu/jl.vue'
import qb from '../../components/menu/qb.vue'
import bkrq from '../../components/menu/bkrq.vue'
import xl from '../../components/menu/xl.vue'
import jg from '../../components/menu/jg.vue'
import more from '../../components/menu/more.vue'
import hqb from '../../components/menu/hqb.vue'
import tc from '../../components/menu/tc.vue'
import jy from '../../components/menu/jy.vue'
import kb from '../../components/menu/kb.vue'
import ly from '../../components/menu/ly.vue'
import pd from '../../components/menu/pd.vue'
import cover from '../../components/cover.vue'
import login from '../../components/login.vue'
export default new vueRouter({
	routes:[
		{
			path:'/index',component:index
		},
		{
			path:'/cats',component:cats
		},
		{
			path:'/shop',
			component:shop,
			children:[
				{
					path:'/ml',
					component:ml,
				},
				{
					path:'/toy',
					component:toy
				},
				{
					path:'/wash',
					component:wash
				},
				{
					path:'/nest',
					component:nest
				},
				{
					path:'/',component:ml
				}
			]	
		},
		{
			path:'/my',component:my
		},
		{
			path:'/login',component:login
		},
		{
			path:'/catzx',component:catzx
		},
		{
			path:'/cathd',component:cathd
		},
		{
			path:'/catfx',component:catfx
		},
		{
			path:'/catxs',component:catxs
		},
		{
			path:'/txtone',component:txtone
		},
		{
			path:'/txttwo',component:txttwo
		},
		{
			path:'/txtthree',component:txtthree
		},
		{
			path:'/txtfour',component:txtfour
		},
		{
			path:'/txtfive',component:txtfive
		},
		{
			path:'/txtsix',component:txtsix
		},
		{
			path:'/comone',component:comone
		},
		{
			path:'/catsone',component:catsone
		},
		{
			path:'/catstwo',component:catstwo
		},
		{
			path:'/catsthree',component:catsthree
		},
		{
			path:'/pzbk',
			component:pzbk,
			children:[
				{
					path:'/all',
					component:all,
				},
				{
					path:'/long',
					component:long,
				},
				{
					path:'/short',
					component:short
				},
				{
					path:'/small',
					component:small
				},
				{
					path:'/middle',
					component:middle
				},
				{
					path:'/',
					component:all
				}
			]
		},
		{
			path:'/jjzj',
			component:jjzj
		},
		{
			path:'/mryl',
			component:mryl,
			children:[
				{
					path:'/zh',
					component:zh,
				},
				{
					path:'/rq',
					component:rq,
				},
				{
					path:'/jl',
					component:jl,
				},
				{
					path:'/',
					component:zh,
				}
			]
		},
		{
			path:'/more',
			component:more
		},
		{
			path:'/zmy',
			component:zmy
		},
		{
			path:'/ly',
			component:ly
		},
		{
			path:'/pd',
			component:pd
		},
		{
			path:'/bksp',
			component:bksp,
			children:[
				{
					path:'/qb',
					component:qb
				},
				{
					path:'/bkrq',
					component:bkrq
				},
				{
					path:'/xl',
					component:xl
				},
				{
					path:'/jg',
					component:jg
				},
				{
					path:'/',
					component:qb
				}
			]
		},
		{
			path:'/hospital',
			component:hospital,
			children:[
				{
					path:'/hqb',
					component:hqb
				},
				{
					path:'/tc',
					component:tc
				},
				{
					path:'/jy',
					component:jy
				},
				{
					path:'/kb',
					component:kb
				},
				{
					path:'/',
					component:hqb
				}
			]
		},
		{
			path:'/*',
			redirect:'index'
		}

	]
})