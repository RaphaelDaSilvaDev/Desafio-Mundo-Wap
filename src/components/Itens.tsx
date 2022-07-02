import { ChangeEvent, useState } from "react"
import { IApiStoreResponse } from "../interfaces/ApiStoreResponse"
import { IStoreDetails } from "../interfaces/StoreDetails"
import { IStoreId } from "../interfaces/StoreId"
import { ListStore, ListStoreDiv, ListStoreItem, ListStoreItemCheck, ListStoreItemHeader, LoadingDiv } from "../pages/Home/styles"
import { getStoresById } from "../queries/getStoresById"
import { Modal } from "./Modal"

export function Itens(props: {
    stores: IApiStoreResponse[],
    loading: boolean,
    enebleItens: IStoreId[],
    setEnebleItens: React.Dispatch<React.SetStateAction<IStoreId[]>>,
    disableItens: IStoreId[],
    setDisableItens: React.Dispatch<React.SetStateAction<IStoreId[]>>,
    setShowModal: React.Dispatch<React.SetStateAction<IStoreDetails | undefined>>
}) {

    function handleSetActivateItem(event: ChangeEvent<HTMLInputElement>) {
        const { value, checked } = event.target
        const id = parseInt(value)
        const store = props.stores.find((store: IApiStoreResponse) => store.id === id)
        if (checked) {
            if (store?.active === 1) {
                props.setEnebleItens((selectedItens: IStoreId[]) => [...selectedItens, { id }])
            } else {
                props.setDisableItens((selectedItens: IStoreId[]) => [...selectedItens, { id }])
            }
        } else {
            props.setEnebleItens(props.enebleItens.filter((store: IStoreId) => store.id !== id))
            props.setDisableItens(props.disableItens.filter((store: IStoreId) => store.id !== id))
        }
    }

    if (props.loading) {
        return (<LoadingDiv><p>Loading...</p></LoadingDiv>)
    }

    function handleModal(store: IApiStoreResponse) {
        getStoresById(store.id).then((response: IStoreDetails) => {
            props.setShowModal(response)
        })
    }

    return (
        <ListStore>
            {props.stores.map((store: IApiStoreResponse) => {
                return (
                    <ListStoreDiv key={store.id}>
                        <ListStoreItemCheck type="checkbox" name="isActive" onChange={handleSetActivateItem} value={store.id} />
                        <ListStoreItem onClick={() => handleModal(store)}>
                            <ListStoreItemHeader>
                                <span>{store.name}</span>
                                <p>{store.active === 0 ? "Loja Desativada" : "Loja Ativada"}</p>
                            </ListStoreItemHeader>
                        </ListStoreItem>
                    </ListStoreDiv>
                )
            })}
        </ListStore>
    )
}