import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    background-color: #292929;
    color: #ebebeb;
    border-radius: 1rem;
`

const Page = styled.p`
    text-align: center;
    font-size: 20px;
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Input = styled.input`
    width: 300px;
    padding: 0.8rem;
    background-color: #ffffff;
    outline: none;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
`

const Button = styled.input`
    background: #247BA0;
    border-radius: 1rem;
    padding: 0.8rem;
    border: none;
    outline: none;
    color: #eee;
    font-size: 18px;
    transition: all 250ms;
    
    :hover{
        cursor: pointer;
        background-color: #1A5974;
    }
`

const ErrorText = styled.p`
    margin-bottom: 1rem;
    font-size: 18px;
    color: #CC0300;
    text-align: center;
`


export { Container, Form, Page, Inputs, Input, Button, ErrorText }
