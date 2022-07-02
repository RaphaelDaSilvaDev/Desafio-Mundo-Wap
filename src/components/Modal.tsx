import { IStoreDetails } from "../interfaces/StoreDetails";
import { ModalContainer, ModalContainerButton, ModalContainerInfo, ModalContainerInfoDiv, ModalContainerTitle, ModalDiv } from "../pages/Home/styles";

export function Modal(props: {
    modal: IStoreDetails,
    setShowModal: React.Dispatch<React.SetStateAction<IStoreDetails | undefined>>
}) {

    function removeModal() {
        props.setShowModal(undefined)
    }

    return (
        <ModalDiv>
            <ModalContainer>
                <ModalContainerButton type="submit" value="X" onClick={removeModal} />
                <ModalContainerInfoDiv>
                    <ModalContainerTitle>{props.modal.name}</ModalContainerTitle>
                    <ModalContainerInfo>{props.modal.active === 0 ? "Loja Desativada" : "Loja Ativada"}</ModalContainerInfo>
                    <ModalContainerInfo>{props.modal.address}</ModalContainerInfo>
                </ModalContainerInfoDiv>
            </ModalContainer>
        </ModalDiv>
    )
}