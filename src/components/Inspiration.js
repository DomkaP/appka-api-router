import React from 'react'
import {useState, useEffect} from 'react';
import Przycisk from "./przycisk";

//podpięcie Api NASA

export default function Inspiration() {
const [photoData, setPhotoData]=useState(null)

useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
    const res = await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=RBikiz4ZfceUdUW8GLZkOWto5ixSrTLhhAe98SDq'
    );
    const data = await res.json();
    setPhotoData(data);
    console.log(data);
    //w data trzymamy zdjęcie wraz z opisem - pokazanie w konsoli
    }
},[]);
//[] - pobieranie tylko raz


if(!photoData) return <div/>;
//na wypadek błędu

return (
    
    <>
    {/* react fragment - stworzenie obiektu z dwóch */}
    
    
    {/* warunek przy dodawaniu zdjęcia - jeśli jest zdjęcie zwraca zdjęcie, jeśli nie zwraca iframe */}
    <div className="nasa-photo">
    


        
        {photoData.media_type === "image" ? (
        <img
            src={photoData.url}
            // wstawienie zdjęcia z linku)
            alt={photoData.title}
            className="photo"
            //tytuł zdjęcia
        />
        //znak lub poniżej
        ) : (
            <iframe
            title="space-inspiration"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"


            />
        )}
        <div>

        <h1>{photoData.title}</h1>
            {/* dodanie nagłówka h1 z tytułem zdjęcia */}
        <p className="date">{photoData.date}</p>
            {/* dodanie paragrafu z dzisiejszą datą (photo of the day) */}     
            <p className="explanation">{photoData.explanation}</p>
            {/* dodanie paragrafu z opisem zdjęcia */}
        </div>

    </div>

    {/* //dodanie przycisku */}
    <Przycisk/>
    </>

)
}