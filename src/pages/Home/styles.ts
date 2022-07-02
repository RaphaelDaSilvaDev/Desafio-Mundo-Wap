import styled from "styled-components";

const AppStyle = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeaderDiv = styled.div`
    width: 100vw;
    padding: 1rem;
    display: flex;
    justify-content: center;
    background-color: #292929;
`

const HeaderContainer = styled.div`
    width: min(936px, 100%);
    display: flex;
    justify-content: space-between;
`
const HeaderContainerButtons = styled.div`
    display: flex;
    gap: 2rem;
`

const HeaderInputs = styled.input`

    padding: 0.8rem 2rem;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #247BA0;
    color: #EBEBEB;
    transition: all 200ms;

    :hover{
        cursor: pointer;
        background: #1A5974;
    }

    :disabled{
        cursor: not-allowed;
        background-color: #999999;
    }
`

const HeaderInputsSearch = styled.input`
    padding: 0.8rem;
    border: none;
    outline: none;
    border-radius: 8px 0 0 8px;
`

const HeaderInputsSearchSubmit = styled.input`
    padding: 0.8rem 2rem;
    border: none;
    outline: none;
    border-radius: 0 8px 8px 0;
    background-color: #247BA0;
    color: #EBEBEB;
    transition: all 200ms;

    :hover{
        cursor: pointer;
    }
`

const ItensInformation = styled.div`
    width: min(936px, 100%);
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ItensInformationDiv = styled.div`
    width: 100%;
    background-color: #292929;
    color: #ebebeb;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

const ListStore = styled.div`
    width: min(936px, 100%);
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #292929;
    border-radius: 8px;
    padding: 1rem;
    gap: 1rem;
`
const ListStoreDiv = styled.div`
   width: 100%;
   background-color: #141414;
   color: #ebebeb;
   padding: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ListStoreItem = styled.div`
    height: 40px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    :hover{
        cursor: pointer;
    }
    
`

const ListStoreItemHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`

const ListStoreItemCheck = styled.input`
    width: 20px;
    height: 20px;

    :hover{
        cursor: pointer;
    }
`

const LoadingDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eee;
    font-size: 50px;
`

const ModalDiv = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0px;
    background-color: rgba(30, 30,30, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms;
`

const ModalContainer = styled.div`
    display: block;
    width: 500px;
    height: 500px;
    padding: 2rem;
    background-color: #141414;
    color: #ebebeb;
    position: fixed;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ModalContainerInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-bottom: 100px;
`

const ModalContainerTitle = styled.strong`
    font-size: 24px;
`

const ModalContainerInfo = styled.p`
    font-size: 18px;
`

const ModalContainerButton = styled.input`
    align-self: flex-end;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-color: #CC0300;
    color: #fff;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    transition: all 200ms;
    :hover{
        cursor: pointer;
        background-color: #A30300;
    }
`

export {
    HeaderDiv,
    HeaderInputs,
    HeaderInputsSearch,
    HeaderInputsSearchSubmit,
    HeaderContainer,
    HeaderContainerButtons,
    ItensInformation,
    AppStyle,
    ItensInformationDiv,
    ListStore,
    ListStoreDiv,
    ListStoreItem,
    ListStoreItemHeader,
    ListStoreItemCheck,
    LoadingDiv,
    ModalDiv,
    ModalContainer,
    ModalContainerInfoDiv,
    ModalContainerTitle,
    ModalContainerInfo,
    ModalContainerButton
}