import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/signin",
        name: "registration.signin",
        meta: { title: "Masuk" },
        component: () =>
            import ("@/views/registration/SignIn.vue"),
    },
    {
        path: "/signup",
        name: "registration.signup",
        meta: { title: "Daftar" },
        component: () =>
            import ("@/views/registration/SignUp.vue"),
    },
    {
        path: "/",
        name: "home.index",
        meta: { title: "Beranda" },
        component: () =>
            import ("@/views/home/Index.vue"),
    },
    {
        path: "/me/publication",
        name: "publication.index",
        meta: { title: "Publikasi Saya" },
        component: () =>
            import ("@/views/publication/Index.vue"),
    },
    {
        path: "/me/publication/create",
        name: "publication.create",
        meta: { title: "Tambah Publikasi" },
        component: () =>
            import ("@/views/publication/Create.vue"),
    },
    {
        path: "/me/publication/edit/:id",
        name: "publication.edit",
        meta: { title: "Ubah Publikasi" },
        component: () =>
            import ("@/views/publication/Edit.vue"),
    },
    {
        path: "/publication/all",
        name: "publication",
        meta: { title: "Publikasi" },
        component: () =>
            import ("@/views/home/Publication.vue"),
    },
    {
        path: "/publisher/all",
        name: "publisher",
        meta: { title: "Penerbit" },
        component: () =>
            import ("@/views/home/Publisher.vue"),
    },
    {
        path: "/type/all",
        name: "type",
        meta: { title: "Tipe" },
        component: () =>
            import ("@/views/home/Type.vue"),
    },
    {
        path: "/me/profile",
        name: "Profil",
        meta: { title: "Profil Saya" },
        component: () =>
            import ("@/views/me/Index.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: { title: "Dashboard" },
        component: () =>
            import ("@/views/admin/Index.vue"),
    },
    {
        path: "/dashboard/publication",
        name: "DashboardPublication",
        meta: { title: "Dashboard" },
        component: () =>
            import ("@/views/admin/Publication.vue"),
    },
    {
        path: "/dashboard/type",
        name: "DashboardType",
        meta: { title: "Dashboard" },
        component: () =>
            import ("@/views/admin/Types.vue"),
    },
    {
        path: "/dashboard/type/create",
        name: "DashboardTypeCreate",
        meta: { title: "Dashboard" },
        component: () =>
            import ("@/views/admin/CreateType.vue"),
    },
    {
        path: "/dashboard/publisher",
        name: "DashboardPublisher",
        meta: { title: "Dashboard" },
        component: () =>
            import ("@/views/admin/Publishers.vue"),
    },
    {
        path: "/dashboard/user",
        name: "DashboardUser",
        meta: { title: "Dashboard" },
        component: () =>
            import ("@/views/admin/Users.vue"),
    },
    {
        path: "/:NotFound(.*)*",
        name: "404NotFound",
        meta: { title: "404 Not Found" },
        component: () =>
            import ("@/views/error/PageNotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    const publicPages = ["/", "/signup", "/signin"];
    const adminPages = [
        "/dashboard",
        "/dashboard/publication",
        "/dashboard/type",
        "/dashboard/publisher",
        "/dashboard/user",
    ];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");
    const authReqAdmin = adminPages.includes(to.path);
    const role = loggedIn ? JSON.parse(loggedIn).roles[0] : null;
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next("/signin");
    } else {
        if (role === "ROLE_ADMIN") {
            next();
        } else {
            if (authReqAdmin) {
                next("/signin");
            } else {
                next();
            }
        }
    }
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Stuju `;
    next();
});

export default router;