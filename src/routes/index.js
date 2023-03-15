import TheHome from '@/views/home/TheHome.vue';

const TheNotFound = () => import( '@/views/not-found/TheNotFound.vue' );

export default [
    {
        path: '/',
        name: 'TheHome',
        component: TheHome,
        meta: {
            title: 'Customize Me',
            layout: 'default',
            isPublic: true,
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'TheNotFound',
        component: TheNotFound,
        meta: {
            title: 'Customize Me',
            layout: 'blank',
            isPublic: true,
        }
    },
];
