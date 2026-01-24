import React, { useState } from "react"
import { Signup } from "../services/auth.js'"

const signup = () => {

  const [formData, setFormData] =
   useState({email: "",
             password: "",
             first_name: "",
             last_name: ""})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const result = await signup(formData)
    if (!result) {
      alert("Error creando usuario")
      return
    }
    alert(result.message)
    console.log("Usuario creado:", result)
  }

  return (
    <div className="container mt-4">
      <h2>Crear Usuario</h2>

      <form onSubmit={handleSubmit}>
        
        <input className="form-control mb-2"
          type="text"
          name="first_name"
          placeholder="Nombre"
          onChange={handleChange}/>

        <input className="form-control mb-2"
          type="text"
          name="last_name"
          placeholder="Apellido"
          onChange={handleChange}/>

        <input className="form-control mb-2"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}/>

        <input className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}/>

        <button className="btn btn-primary w-100">Crear Cuenta</button>
      </form>
    </div>
  )
}
export default Signup
