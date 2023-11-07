"use client";
import store from "./store";
import { Provider } from "react-redux";


// axios.defaults.baseURL= 'http://localhost:3001';

 
axios.defaults.baseURL= 'https://server-eventifypro.onrender.com';

export function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>;
}