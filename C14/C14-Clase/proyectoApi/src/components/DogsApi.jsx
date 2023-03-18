import React, { useEffect, useState } from 'react'

const RandomApi = () => {

    const [perrito, setPerrito] = useState({});
    const url = "https://dog.ceo/api/breeds/image/random";

    //Forma 1 (se repite codigo) 
/*  
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPerrito(data))
    }, []);

    const fetchData = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPerrito(data))
    } 
 */

//Forma 2 (OK)
    const fetchData = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPerrito(data))
    }

    useEffect(() => {
        fetchData()
    }, []); 


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <img src={perrito.message} alt="" width={300}/>
            <button onClick={() => fetchData()}>Cambiar de perrito</button>
        </div>
    )
}

export default RandomApi;