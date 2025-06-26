import {useState} from 'react'

const EventHandingExamples = () => {

    const handleClick = () =>{
        alert('testando')
    }

    const handleGreet = (name) =>{
        alert ( `Ola ${name}`)
    }

    const [name, setName] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()

        alert(`enviado ${name}`)
    }
  return (
    <div>
      <button onClick={() => alert('oii')} >clique</button>
      <button onClick={handleClick} >clique 2</button>
      <br/>
      <button onClick={() => handleGreet("joao")} >dizer ola joao</button>
      <button onClick={() => handleGreet('pedro')} >dizer ola pedro</button>
      <br/>
      <form onSubmit={handleSubmit} >
        <input 
            type = 'text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='digite'/>
        <input type='submit' value='evniar'/>
      </form>
    </div>
  )
}

export default EventHandingExamples
