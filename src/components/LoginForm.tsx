import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IError } from "../interfaces/Error";
import { IUser } from "../interfaces/User";
import { loginUser } from "../queries/loginUser";
import { validateFields } from "../queries/validateFields";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { Button, Container, ErrorText, Form, Input, Inputs, Page } from "../pages/Login/style";
import axios, { AxiosError } from "axios";

export function LoginForm(props: {
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    user: IUser,
    setStatusErro: React.Dispatch<React.SetStateAction<IError | undefined>>,
    statusErro: IError | undefined
}) {

    const navigate = useNavigate()
    const [logged, setLogged] = useState(false)

    function handleSetUser(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        props.setUser({ ...props.user, [name]: value })
    }

    const addUser = async (event: FormEvent) => {
        event.preventDefault()
        if (!(await validateFields({ user: props.user, setStatusErro: props.setStatusErro }))) return;
        props.setStatusErro({ type: 'success', message: '' })
        loginUser({ user: props.user, setLogged }).
            then((response: string | AxiosError<any, any>) => {
                if (axios.isAxiosError(response)) {
                    return props.setStatusErro({ type: 'error', message: 'Usuário ou senha inválidos' })
                }
                tokenReader(response)
            })
    }

    function tokenReader(token: string) {
        localStorage.setItem('token', JSON.stringify(token))
        api.defaults.headers.common['Authorization'] = token;
        setLogged(true)
    }

    if (logged) {
        navigate('/home')
    }
    return (
        <Container>

            <Form className="content">
                <div className="error">
                    {props.statusErro?.type === 'error' ? <ErrorText>{props.statusErro.message}</ErrorText> : ""}
                    {props.statusErro?.type === 'success' ? "" : ""}
                </div>
                <Page>Login</Page>
                <Inputs>
                    <Inputs>
                        <label>
                            Nome de Usuário:
                        </label>
                        <Input type="text" name="username" onChange={handleSetUser} />
                    </Inputs>
                    <Inputs>
                        <label>
                            Senha:
                        </label>
                        <Input type="password" name="password" onChange={handleSetUser} />
                    </Inputs>
                </Inputs>
                <Button type="submit" onClick={addUser} value={logged ? "Carregando" : "Entrar"} />
            </Form>
        </Container>
    )
}