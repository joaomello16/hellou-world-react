//para fazer o contador é necessario importar o useState
//useState é um hook
import {useState} from 'react'

const UseStateComponent = () => {

//para mudar o estado na tela nao posso declarar a variavel como em JS 
//é necessario uma vr de consulta e uma de alteração
//variavel de consulta, vr de alteração e inicio do hook
    const [numero, setNumero] = useState(0)

    const incremento = function add(){
        //setNumero ((prevNumero) => prevNumero+1)
        setNumero(numero + 1)
        console.log(numero)
    }

    const [user, setUser] = useState({
      name: 'jhon',
      age: 36,
      hobbies: ['jogar de bastion', 'camperar na moita', 'ganhar em segundo lugar']
    })

    const updateUserAge = () =>{
      setUser ((prevUser) => ({
        ...prevUser,
        age: prevUser.age + 1
      }))
      
    }

  return (
    <div>
      <h2>Contador</h2>
      <p>voce clicou {numero} vez(es)</p>
      <button onClick={incremento} >clique</button>

      <p>Nome: {user.name} e idade {user.age}</p>
      <button onClick={updateUserAge} >incrementar idade</button>
    </div>
  )
}

export default UseStateComponent
