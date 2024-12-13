import React, { useMemo } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

// ... changes ...
import AppLayout from "../layouts/AppLayout";

// pages
import Login from "../pages/validations/Login";
import Signup from "../pages/validations/Signup";

// panels
import panels from "./panels";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import useAbility from "../hooks/useAbility";

const Routing = () => {
    // ... changes ....
    const { isAuthentication, role, token } = useSelector(state => state.auth);
    const isAuth = isAuthentication;

    // hooks
    const location = useLocation();
    // const ability = useAbility();
    // const myPanels = ability.pages(panels) || panels;
    const myPanels = panels;

    const destination = useMemo(() => {
        if (isAuth) {
            return `/${role}/dashboard`;
        } else if (!isAuth) {
            return `/login`;
        } else {
            return `/${role}`;
        }
    }, [role, isAuth, token]);

    const metaConfig = (meta = {}) => {
        try {
            if (meta.title) {
                window.document.title = meta.title;
            }
            if (meta.desc || meta.description) {
                const description = document.querySelector("meta[name='description']");
                if (description) {
                    description.setAttribute("content", meta.desc || meta.description);
                } else {
                    const metaDesc = document.createElement("meta");
                    metaDesc.name = "description";
                    metaDesc.content = meta.desc || meta.description;
                    document.head.appendChild(metaDesc);
                }
            }
        } catch (err) {
            console.error("Error in meta configuration:", err);
        }
    };

    const childrenElement = (item, parentPath) => {
        const path = `${item.path || ""}`;

        if (item.meta && location.pathname === `${parentPath}/${path}` && item.permission !== false) {
            metaConfig(item.meta);
        }

        if (item.element) {
            return {
                path,
                element: item.permission === false ? <Navigate to={"/"} /> : item.element,
            };
        } else {
            throw new Error("Element must have `element` or `children`!");
        }
    }

    const processElement = (item) => {
        const path = `${role ? `/${role}/` : ""}${item.path || ""}`;

        if (item.meta && location.pathname === path && item.permission !== false) {
            metaConfig(item.meta);
        }

        if (item.children && Array.isArray(item.children) && item.element) {
            return {
                path,
                element: item.permission === false ? <Navigate to={"/"} /> : item.element,
                children: item.children.map(child => childrenElement(child, path))
            };
        }
        else if (item.children && Array.isArray(item.children)) {
            return {
                path,
                children: item.children.map(child => childrenElement(child, path))
            };
        } else if (item.element) {
            return {
                path,
                element: item.permission === false ? <Navigate to={"/"} /> : item.element,
            };
        } else {
            throw new Error("Element must have `element` or `children`!");
        }
    };

    const parentElement = (item) => {
        const path = `/${item.path || ""}`;

        if (item.meta && location.pathname === path && item.permission !== false) {
            metaConfig(item.meta);
        }

        if (item.children && Array.isArray(item.children) && item.element) {
            return {
                path,
                element: item.permission === false ? <Navigate to={"/"} /> : item.element,
                children: item.children.map(child => childrenElement(child, path))
            };
        }
        else if (item.children && Array.isArray(item.children)) {
            return {
                path,
                children: item.children.map(child => childrenElement(child, path))
            };
        } else if (item.element) {
            return {
                path,
                element: item.permission === false ? <Navigate to={"/"} /> : item.element,
            };
        } else {
            throw new Error("Element must have `element` or `children`!");
        }
    }

    // panel
    const adminPanel = myPanels?.map(item => processElement(item));

    const routes = [
        {
            path: "/",
            element: <Navigate to={destination} />,
        },
        {
            path: `/${role}`,
            element: isAuth ? <AppLayout />: <Navigate to={"/login"} />,
            children: adminPanel,
        },
        {
            path: "*",
            element: <Navigate to={"/"} />,
        },
        {
            path: `/login`,
            element: !isAuth ? <Login /> : <Navigate to={"/"} />,
        },
        {
            path: `/signup`,
            element: !isAuth ? <Signup /> : <Navigate to={"/"} />,
        },
    ];

    const element = useRoutes(routes);
    return element;
};

export default Routing;
