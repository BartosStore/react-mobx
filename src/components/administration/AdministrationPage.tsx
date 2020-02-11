import React from "react";
import { observable, action } from 'mobx'
import { Observer } from "mobx-react"
import './../../App.css';

class AdministrationStore {
    @observable temperature: number = 0;

    @action increaseTemp() {
        this.temperature++;
        console.log(this.temperature);
    }

    get temp() {
        return this.temperature;
    }
}

const store = new AdministrationStore();

const AdministrationPage = () => {
    // const store = new AdministrationStore();
    return (
        <div className="App">
            <h2>Administration</h2>
            <div className="Form">
                <Observer>{() => <div>{store.temp}</div>}</Observer>
                <button className="Btn" onClick={() => store.increaseTemp()}>Increase</button>
            </div>
        </div>
    )
}

export default AdministrationPage;