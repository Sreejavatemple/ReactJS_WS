import React from "react";
import First from "./First";
import Body from "./Body";
import Footer from "./Footer";
export default function Main():any{
    return(
        <React.Fragment>
            <First />
            <Body />
            <Footer />
        </React.Fragment>
    )
};