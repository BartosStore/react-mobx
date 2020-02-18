import Axios from "axios";
import { owmUrl } from "../../res/constants";

class ForecastApiState {
  getTemp() {
    Axios.get(owmUrl).then(result => console.log(result.data.main.temp));
  }
}

export default ForecastApiState;
