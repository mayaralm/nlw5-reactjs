import {useState} from 'react'

export default function Button (propriedade){
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    return (
        <>
        <span> {count} </span><br />
        <button onClick={increment}>{propriedade.children}</button>
        <br />
        </>
    )
}