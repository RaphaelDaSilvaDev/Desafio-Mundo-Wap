import { useState } from "react";
import { LoginForm } from "../../components/LoginForm";
import { IError } from "../../interfaces/Error";
import { IUser } from "../../interfaces/User";
import './style.ts'

const Login = () => {
  const [user, setUser] = useState<IUser>({
    username: "",
    password: ""
  })

  const [statusErro, setStatusErro] = useState<IError>()

  return (
    <div>
      <LoginForm
        setUser={setUser}
        user={user}
        setStatusErro={setStatusErro}
        statusErro={statusErro}
      />
    </div>
  )
}

export default Login
