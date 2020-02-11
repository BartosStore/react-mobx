import { observable, action } from 'mobx'

class AdministrationStore {
    @observable temperature: number = 0;

    @action increaseTemp() {
        this.temperature++;
        console.log(this.temperature);
    }

    @action decreaseTemp() {
        this.temperature--;
        console.log(this.temperature);
    }

    get temp() {
        return this.temperature;
    }
}

export const administrationStore = new AdministrationStore();