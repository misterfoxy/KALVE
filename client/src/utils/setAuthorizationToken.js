import axios from "axios";

export default function setAuthorizationToken(token) {
    if(token){
        console.log(token)
        axios.defaults.headers.common['Auth-Token'] = `Bearer ${token}`;
    } else {
        console.log("No Token");
        delete axios.defaults.headers.common['Auth-Token'];
    }
}