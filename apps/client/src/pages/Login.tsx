import { trpc } from "@trpc";
import React, { useState } from "react";

type Form = {
    userName: string,
    password: string,
}

function Login() {

    const LoginApi = trpc.Login.useMutation()

    const [form, setFrom] = useState<Form>({
        userName: '',
        password: ''
    })

    console.log(LoginApi.data);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const res = LoginApi.mutate(form)
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setFrom({ ...form, [e.currentTarget.name]: e.currentTarget.value })
    }


    return (

        <div>
            <h2>Login Pages</h2>
            <form onSubmit={handleSubmit}>
                <label>userName: </label>
                <input name="userName" type="text" required onChange={handleChange} />
                <br />
                <label>Password: </label>
                <input name="password" type="password" required onChange={handleChange} />
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Login