import React from 'react'

const JsxExemples = () => {

    const userName = 'Jhon'

    const user = {
        name: 'Bastion',
        lastName: 'Serpente Azeda',
    }

    function pegarSaudacao(name){
        return `Ola ${name}`
    }

    const userLoged = true

    const userVerifi = 'admin'

    const users = [
        { id: 1, name: 'joao'},
        { id: 2, name: 'jefor'},
        { id: 3, name: 'dogla'},
    ]

  return (
    <div>
      <p>JSX exemplos</p>
      <p>O nome é: {userName}</p>
      <p>seu vulgo é {user.name} da {user.lastName}</p>
      <p>2+2 = {2+2}</p>
      <p>{pegarSaudacao(userName)}</p>
      <p>{pegarSaudacao('jão')}</p>

      {/* diferenças pro HTMl */}

        <div className="teste"></div>
        <button onClick={() => alert('teste')}>Clique aqui</button>

        {/*renderezação condicional*/}
        {userLoged ? (
            <div>
                <p>Usuario logado</p>
            </div>
        ): (
            <p>Nao esta logado</p>
        )
        }

        <p>
            {userVerifi == 'admin' && 'voce é um admin'}
        </p>

        {/*Renderização de listas*/}
        <div>
            <ul>
                {users.map((user) => (
                    <li key = {user.id} >
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JsxExemples
