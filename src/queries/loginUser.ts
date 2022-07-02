import axios, { AxiosError, Method } from "axios";
import { NavigateFunction } from "react-router-dom";
import api from "../api/api";
import { IError } from "../interfaces/Error";
import { IUser } from "../interfaces/User";

export function loginUser(props: {
    user: IUser,
    setStatusErro?: React.Dispatch<React.SetStateAction<IError | undefined>>,
    setLogged: React.Dispatch<React.SetStateAction<boolean>>
}): Promise<string | AxiosError<any, any>> {
    const url = process.env.REACT_APP_LINK_API
    let methdod: Method = 'POST'
    const options = {
        method: methdod,
        url: `${url}/users/login`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        data: { username: props.user.username, password: props.user.password }
    };

    const token = api.request(options).then(function (response): string {
        const { data: { token } } = response.data
        return token
    }).catch(function (error) {
        return error
    });

    return token
}