import { observable, action } from 'mobx'

class AdministrationStore {
    @observable private temperature: number = 22.0;
    private minTemperature: number = 16.0;
    private maxTemperature: number = 30.0;

    get temp() {
        return this.temperature;
    }

    get minTemp() {
        return this.minTemperature;
    }

    get maxTemp() {
        return this.maxTemperature;
    }

    @action increaseTemp() {
        if (this.temperature < this.maxTemperature) {
            this.temperature += .5;
        }
        console.log(this.temperature);
    }

    @action decreaseTemp() {
        if (this.temperature > this.minTemperature) {
            this.temperature -= .5;
        }
        console.log(this.temperature);
    }
}

export const administrationStore = new AdministrationStore();