import './App.css'
import { useEffect, useState } from 'react'

function App() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('http://127.0.0.1:5000')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="App">
            {data && (
                <>
                    <h1>{data.name}</h1>
                    <br />
                    <h2>{data.isExist ? 'Exist' : null}</h2>
                </>
            )}
        </div>
    )
}

export default App
