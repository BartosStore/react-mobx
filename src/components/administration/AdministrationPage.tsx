import React from "react";
import './../../App.css';

class AdministrationStore {
    temperature: number = 20;

    get temp() {
        return this.temperature;
    }
}

const administrationStore = new AdministrationStore();

const AdministrationPage = () => {
    return (
        <div className="App">
            <h2>Administration</h2>
            <p>Temperature: {administrationStore.temp}</p>
        </div>
    )
}

export default AdministrationPage;