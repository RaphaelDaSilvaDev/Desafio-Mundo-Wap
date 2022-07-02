import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/api"
import { IApiStoreResponse } from "../interfaces/ApiStoreResponse"
import { IStoreDetails } from "../interfaces/StoreDetails"
import { IStoreId } from "../interfaces/StoreId"
import { HeaderContainer, HeaderContainerButtons, HeaderDiv, HeaderInputs, HeaderInputsSearch, HeaderInputsSearchSubmit } from "../pages/Home/styles"
import { getStoresById } from "../queries/getStoresById"
import { updateStore } from "../queries/updateStore"


export function Header(props: {
    stores: IApiStoreResponse[],
    setStores: React.Dispatch<React.SetStateAction<IApiStoreResponse[]>>,
    search: string | undefined,
    setSearch: React.Dispatch<React.SetStateAction<string | undefined>>,
    setStoresSearch: React.Dispatch<React.SetStateAction<IStoreDetails | undefined>>,
    enebleItens: IStoreId[],
    setEnebleItens: React.Dispatch<React.SetStateAction<IStoreId[]>>,
    disableItens: IStoreId[],
    setDisableItens: React.Dispatch<React.SetStateAction<IStoreId[]>>,
}) {
    const navigate = useNavigate()



    function handleLogout() {
        localStorage.removeItem('token')
        api.defaults.headers.common['Authorization'] = false;
        navigate('/login')
    }

    function handleActiveAllSelected(active: boolean) {
        if (active == false) {
            updateStore(props.enebleItens, active)
                .then(() => {
                    props.enebleItens.forEach((item: IStoreId) => {
                        getStoresById(item.id).then((storeId: IApiStoreResponse) => {
                            const updateStore = { id: storeId.id, name: storeId.name, active: storeId.active }
                            const store: IApiStoreResponse[] = props.stores
                            const index = props.stores.findIndex((store: IApiStoreResponse) => store.id === storeId.id)
                            store[index] = updateStore
                            props.setStores(store)
                            props.setEnebleItens([])
                            props.setDisableItens([])
                            resetCheckBox()
                        })
                    })
                })
        } else {
            updateStore(props.disableItens, active)
                .then(() => {
                    props.disableItens.forEach((item: IStoreId) => {
                        getStoresById(item.id).then((storeId: IApiStoreResponse) => {
                            const updateStore = { id: storeId.id, name: storeId.name, active: storeId.active }
                            const store: IApiStoreResponse[] = props.stores
                            const index = props.stores.findIndex((store: IApiStoreResponse) => store.id === storeId.id)
                            store[index] = updateStore
                            props.setStores(store)
                            props.setDisableItens([])
                            props.setEnebleItens([])
                            resetCheckBox()
                        })
                    })
                })
        }
    }


    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        props.setSearch(value)
    }


    async function getSearch(event: FormEvent) {
        event.preventDefault()
        const store = props.stores.find((store: IApiStoreResponse) => store.name === props.search)
        if (store) {
            const getStore = await getStoresById(store.id)
            props.setStoresSearch(getStore)
        }
    }

    function resetCheckBox() {
        document.querySelectorAll('input[type=checkbox]').forEach((el: any) => el.checked = false);
    }

    return (
        <HeaderDiv>
            <HeaderContainer>
                <HeaderContainerButtons>
                    <HeaderInputs type="submit" onClick={handleLogout} value="Sair" />
                    {props.disableItens.length === 0
                        ? <HeaderInputs type="submit" disabled onClick={(target) => handleActiveAllSelected(true)} value="Ativar" />
                        : <HeaderInputs type="submit" onClick={(target) => handleActiveAllSelected(true)} value="Ativar" />
                    }

                    {props.enebleItens.length === 0
                        ?
                        <HeaderInputs type="submit" disabled onClick={(target) => handleActiveAllSelected(false)} value="Desativar" />
                        :
                        <HeaderInputs type="submit" onClick={(target) => handleActiveAllSelected(false)} value="Desativar" />

                    }
                </HeaderContainerButtons>
                <form>
                    <HeaderInputsSearch type="text" name="search" id="search" placeholder="pesquisar loja" onChange={handleSearch} />
                    <HeaderInputsSearchSubmit type="submit" onClick={getSearch} />
                </form>
            </HeaderContainer>
        </HeaderDiv>
    )
}