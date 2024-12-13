import React, { Suspense } from "react";

// route
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "../redux/store";

// components
import Loading from "../components/loaders/Loading";

// contexts
// import LoaderProvider from "../providers/LoaderProvider";

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// slider
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ProvidedRoutes = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <Suspense fallback={<Loading />}>
                        {/* <LoaderProvider> */}
                            <ToastContainer className={"my-toast"} />
                            {children}
                        {/* </LoaderProvider> */}
                    </Suspense>
                </Provider>
            </BrowserRouter>
        </>
    );
};

export default ProvidedRoutes;
