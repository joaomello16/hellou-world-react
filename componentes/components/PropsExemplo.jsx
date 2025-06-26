import React from 'react'

const PropsExemplo = ({nome, idade}) => {
  return (
    <div>
      <h3>Olá {nome}</h3>
      <p>eu tenho {idade} anos</p>
    </div>
  )
}

export default PropsExemplo
