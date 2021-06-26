import axios from "axios";


export const baseURL = "http://localhost:7542/2.0/"
const cardsRequest = axios.create({
    baseURL,
    withCredentials: true
})

export const authAPI = {
    registration(email:string,password:string) {
        return cardsRequest.post('auth/register',{email,password})
            .then(res => res.data)
    }
}


