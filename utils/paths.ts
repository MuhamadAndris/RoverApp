export const PATHS = {
    DASHBOARD: "/",
    AUTH: {
        ROOT: "/auth",
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        LOGOUT: "/auth/logout",
    },
    APP: {
        DASHBOARD: "/",
        REPORTS: "/reports",
        ORDERS: "/orders",
        NEWORDER: "/orders/new",
        PROFILE: "/profile",
    }
} as const;