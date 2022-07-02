import { IApiStoreResponse } from "../interfaces/ApiStoreResponse"
import { IStoreDetails } from "../interfaces/StoreDetails"
import { ItensInformation, ItensInformationDiv } from "../pages/Home/styles"

export function ItenInformation(props: {
    storesSearch: IStoreDetails | undefined,
    store: IApiStoreResponse[]
}
) {

    const store = props.store.find((store: IApiStoreResponse) => store.id === props.storesSearch?.id)

    return (
        <ItensInformation>
            {props.storesSearch
                ?
                <ItensInformationDiv>
                    <strong>{props.storesSearch.name}</strong>
                    <span>{store?.active === 0 ? "Loja Desativada" : "Loja Ativada"}</span>
                    <span>{props.storesSearch.address}</span>
                </ItensInformationDiv>
                : ""}
        </ItensInformation>
    )
}