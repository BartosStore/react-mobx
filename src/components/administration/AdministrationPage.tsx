import React from "react";
import { Observer } from "mobx-react"

import { administrationStore } from "./AdministrationStore";
import { Button } from "reactstrap";
// import './../../App.css';

const store = administrationStore;

const AdministrationPage = () => {
    // const store = new AdministrationStore();
    return (
        <div className="App">
            <h2>Administration</h2>
            <div className="Form">
                <Observer>{() => <div>{store.temp}</div>}</Observer>
                <Button type="submit" color="success" onClick={() => store.increaseTemp()}>Increase</Button>
                <Button type="submit" color="danger" onClick={() => store.decreaseTemp()}>Decrease</Button>
            </div>
        </div>
    )
}

export default AdministrationPage;