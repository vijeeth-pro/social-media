import React, { useState } from "react";

interface Payload {
    userName?: string,
    password1?: string,
    password2?: string
}

function Login() {

    // const { mutate } = trpc.Login.useMutation()

    const [form, setFrom] = useState<Payload>({} as Payload)

    function handleSubmit(e: React.FormEvent) {
        // e.preventDefault()

        // const payload = {
        //     userName: form.userName,
        //     // password: form.password1 === form.password2 ? form.password1 : null
        // }

        // const res = mutate(payload)
        console.log(form);
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setFrom({ ...form, [e.currentTarget.name]: e.currentTarget.value })
    }


    return (
        <div>
            <h2>Login Pages</h2>
            <form>
                <label>userName: </label>
                <input name="userName" type="text" required onChange={handleChange} />
                <br />
                <label>Password: </label>
                <input name="password1" type="password" required onChange={handleChange} />
                <br />
                <label>Confirm Password: </label>
                <input name="password2" type="password" required onChange={handleChange} />
                <br />
                <button type="submit" onSubmit={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default Login