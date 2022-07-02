import axios from "axios"
import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { ItenInformation } from "../../components/ItemInformation"
import { Itens } from "../../components/Itens"
import { Modal } from "../../components/Modal"
import { IApiStoreResponse } from "../../interfaces/ApiStoreResponse"
import { IStoreDetails } from "../../interfaces/StoreDetails"
import { IStoreId } from "../../interfaces/StoreId"
import { getStores } from "../../queries/getStores"
import { AppStyle } from "./styles"

const Home = () => {
    const [stores, setStores] = useState<IApiStoreResponse[]>([])
    const [search, setSearch] = useState<string>()
    const [storesSearch, setStoresSearch] = useState<IStoreDetails>()
    const [disableItens, setDisableItens] = useState<IStoreId[]>([])
    const [enebleItens, setEnebleItens] = useState<IStoreId[]>([])

    const [showModal, setShowModal] = useState<IStoreDetails>()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            getStores().then((response) => {
                response.map((store: IApiStoreResponse) => {
                    setStores(stores => [...stores, store])
                    setLoading(false)
                })
            }).catch(function (error) {
                if (axios.isAxiosError(error)) {
                    window.location.reload();
                }
            })
        })()
    }, [])

    return (
        <AppStyle>
            <Header
                setDisableItens={setDisableItens}
                setEnebleItens={setEnebleItens}
                disableItens={disableItens}
                enebleItens={enebleItens}
                stores={stores}
                setStores={setStores}
                search={search}
                setSearch={setSearch}
                setStoresSearch={setStoresSearch}
            />

            <ItenInformation
                store={stores}
                storesSearch={storesSearch}
            />

            <Itens
                setShowModal={setShowModal}
                disableItens={disableItens}
                setDisableItens={setDisableItens}
                enebleItens={enebleItens}
                setEnebleItens={setEnebleItens}
                loading={loading}
                stores={stores}
            />
            {showModal
                ? <Modal
                    modal={showModal}
                    setShowModal={setShowModal}
                />
                : ""}
        </AppStyle>
    )
}

export default Home