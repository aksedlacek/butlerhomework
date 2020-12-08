import * as React from "react";
import naer from "../assets/naer.PNG";

export default class PageDos extends React.Component <{}> {

    public render() {
        return (
            <div className="centreText">
                {/* React components must have a wrapper node/element */}
                <img src={naer}></img>
            </div>
        );
    }


}