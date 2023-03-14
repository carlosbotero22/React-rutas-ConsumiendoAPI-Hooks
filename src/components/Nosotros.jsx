import React from 'react'

const Nosotros = () => {

  const [usuario, setUsuario] = React.useState([])

  React.useEffect(() => {
    console.log('useEffect')
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        console.log(users)
        setUsuario(users)
  }

  return (
    <div>
      <h1>nosotros</h1>
      <h2>Consumiendo API JSON-PLACE-HOLDER</h2>
      <ul>
        {
            usuario.map(item => (
                <li key={item.id}>{item.name} - {item.email}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Nosotros
