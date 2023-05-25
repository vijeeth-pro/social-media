import Auth from "@/pages/auth/Index";
import Login from "@/pages/auth/Login";
import PageError from "@/pages/error/PageError";
import Register from "@/pages/auth/Register";
import { RouteObject } from "react-router-dom";
import AuthError from "@/pages/error/AuthError";
import Home from "@/pages/home/Index";
import SomeThingError from "@/pages/error/SomeThingError";
import Main from "@/pages/home/Main";
import Profile from "@/pages/home/Profile";
import Search from "@/pages/home/Search";
import Notification from "@/pages/home/Notification";


export const auth:RouteObject[] = [
    {
        path: "/",
        Component: Auth,
        ErrorBoundary: AuthError,
        children: [
            {
                path: '/',
                Component: Login,
                ErrorBoundary: AuthError
            },
            {
                path: '/register',
                Component: Register,
                ErrorBoundary: AuthError
            }
        ]
    },
    {
        path: '*',
        Component: PageError
    }
]

export const home:RouteObject[] = [
    {
        path: "/",
        Component: Home,
        ErrorBoundary: SomeThingError,
        children: [
            {
                path: '/',
                Component: Main,
                ErrorBoundary: SomeThingError
            },
            {
                path: '/profile',
                Component: Profile,
                ErrorBoundary: SomeThingError
            },
            {
                path: '/search',
                Component: Search,
                ErrorBoundary: SomeThingError
            },
            {
                path: '/notification',
                Component: Notification,
                ErrorBoundary: SomeThingError
            }
        ]
    },
    {
        path: '*',
        Component: PageError
    }
]