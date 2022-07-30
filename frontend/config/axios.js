import { setUserData } from 'containers/Auth/redux/actions';
import axios from 'axios';

export const customAxios = async (token) => {

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.interceptors.response.use(
        
        function (response) {
            return response;
        },

        function (error) {
            let res = error.response;
            if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
                window.__NEXT_REDUX_STORE__.dispatch(setUserData(null));
                window.localStorage.removeItem("user");
            }
        }
    );

}