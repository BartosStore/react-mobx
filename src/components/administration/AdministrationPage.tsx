import React from "react";
import { Observer } from "mobx-react"
import { administrationStore } from "./AdministrationStore";
import './../../App.css';

const store = administrationStore;

const AdministrationPage = () => {
    // const store = new AdministrationStore();
    return (
        <div className="App">
            <h2>Administration</h2>
            <div className="Form">
                <Observer>{() => <div>{store.temp}</div>}</Observer>
                <button className="Btn" onClick={() => store.increaseTemp()}>Increase</button>
                <button className="Btn" onClick={() => store.decreaseTemp()}>Decrease</button>
            </div>
        </div>
    )
}

export default AdministrationPage;