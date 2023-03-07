import axios, { AxiosInstance } from 'axios';

class TCGService {
    axiosInstance: AxiosInstance; 
    constructor(endpoint: string){
        this.axiosInstance = axios.create({
            baseURL: endpoint,
            responseType: 'json',
            responseEncoding: 'utf-8',
            headers: {
                'X-Api-Key': process.env.POKEMON_TCG_API_KEY
            }
        });
    }
}

export { TCGService };