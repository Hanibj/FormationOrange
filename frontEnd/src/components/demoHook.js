import React, {useState, useEffect} from 'react'



function DemoHook() {

const [count, setCount] = useState(10);
const [count2, setCount2] = useState(5)

useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  }, [count2]);



return (
    <div>
        <h1>Compteur : {count}</h1>
        
    </div>
  )
}

export default DemoHook