import App from '../App'
/**
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/list', //列表页
                component: resolve => require(['../pages/List'], resolve)
            },
            {
                path: '/add', //新增页面
                component: resolve => require(['../pages/Add'], resolve)
            },
            {
                path: '/welcome', //新增页面
                component: resolve => require(['../pages/Welcome'], resolve)
            },
            {
                path: '/', //默认页面
                component: resolve => require(['../pages/Welcome'], resolve)
            },
        ]
    }
]