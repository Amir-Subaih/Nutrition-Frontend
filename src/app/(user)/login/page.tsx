import React from 'react'
import LoginForm from './LoginForm1'

const LoginPage = async() => {
    // const response = await fetch(' http://127.0.0.1:8000/api/token/')
    // const login = await response.json()
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center my-20">
        <LoginForm />
    </section>
  )
}

export default LoginPage