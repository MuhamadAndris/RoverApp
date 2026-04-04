export const PATHS = {
    DASHBOARD: "/dashboard",
    AUTH: {
        ROOT: "/auth",
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        LOGOUT: "/auth/logout",
    },
    APP: {
        DASHBOARD: "/dashboard",
        REPORTS: "/reports",
        ORDERS: "/orders",
        NEWORDER: "/orders/new",
        PROFILE: "/profile",
    }
} as const;