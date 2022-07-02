import axios, { Method } from "axios";
import api from "../api/api";
import { IStoreId } from "../interfaces/StoreId";

const url = process.env.REACT_APP_LINK_API
let token = localStorage.getItem('token')

export async function updateStore(selectedItens: IStoreId[], active: boolean) {
    let methdod: Method = 'PUT'

    let array: any = []
    selectedItens.map((i) => {
        array.push(i.id)
    })

    const options = {
        method: methdod,
        url: `${url}/stores/edit-active`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${token}`
        },
        data: { ids: array, active: active }
    };

    return await api.request(options).
        then(function () {
            return true
        }).catch(function (error) {
            console.log(error)
            if (axios.isAxiosError(error)) {
                console.log(error)
            }
        });
}