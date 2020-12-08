import * as React from "react";
import {Image} from "react-bootstrap";
import bitch from '../assets/bih.PNG'

export default class PageUno extends React.Component<{}> {

    public render() {
        return (
            <div className="centreText">
                {/* React components must have a wrapper node/element */}
                <img src={bitch}></img>
            </div>
        );
    }
}