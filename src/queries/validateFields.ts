import * as yup from 'yup'
import { IError } from '../interfaces/Error'
import { IUser } from '../interfaces/User'

export async function validateFields(props: {
    user?: IUser,
    setStatusErro: React.Dispatch<React.SetStateAction<IError | undefined>>,
}) {
    let schema = yup.object().shape({
        password: yup.string().required("Insira uma senha"),
        username: yup.string().required("Coloque um username")
    })

    try {
        if (props.user) {
            await schema.validate(props.user)
            return true
        }
    } catch (e) {
        if (e instanceof yup.ValidationError) {
            props.setStatusErro({
                type: 'error',
                message: e.message
            })
            return false
        }
    }
}