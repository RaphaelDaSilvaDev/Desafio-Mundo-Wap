import { Method } from "axios";
import api from "../api/api";

interface IStoreById {
    id: 0,
    name: string,
    active: 0,
    address: string
}

const url = process.env.REACT_APP_LINK_API
let token = localStorage.getItem('token')

export async function getStoresById(id: number): Promise<IStoreById> {
    let methdod: Method = 'GET'
    const options = {
        method: methdod,
        url: `${url}/stores/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${token}`
        }
    };

    const store: IStoreById = await api.request(options).then(function (response): IStoreById {
        const { data } = response.data
        const newDate: IStoreById = data
        return newDate
    })
    return store
}