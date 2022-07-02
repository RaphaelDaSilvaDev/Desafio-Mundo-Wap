import axios, { Method } from "axios";
import api from "../api/api";

const url = process.env.REACT_APP_LINK_API
let token = localStorage.getItem('token')

interface IApiStoreResponse {
    id: number,
    name: string,
    active: 0 | 1
}

export async function getStores(): Promise<IApiStoreResponse[]> {
    let methdod: Method = 'GET'
    const options = {
        method: methdod,
        url: `${url}/stores`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${token}`
        }
    };

    const data: IApiStoreResponse[] = await api.request(options).then(function (response): IApiStoreResponse[] {
        const { data } = response.data
        const stores: IApiStoreResponse[] = data.map((store: IApiStoreResponse) => {
            return store
        })
        return stores
    })
    return data

}