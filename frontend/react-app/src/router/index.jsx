import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([

    {
        path: '/',
        element: '<p>Hi from homePage</p>'
    },

    {
        path: '/login',
        element: '<p>Hi from login</p>'
    },

    {
        path: '/register',
        element: '<p>Hi from register</p>'
    },

    {
        path: '/users',
        element: '<p>Hi from users</p>'
    },

])