import React from 'react'
import dp from './DP2.png'
import Przycisk from "./przycisk";


//strona about, wgranie zdjęcia plus opis

export default function About() {
        
        return(

            <>
        <div className="about"> 
            <h1> About me</h1>
            <img
            src={dp}
            alt="moje zdjęcie"
            className="myphoto"
            />

            
 
            <p> Hello! My name is Dominika, and I'm glad you've found my website. This app has been made for "Creating Internet Applications" class as a final project. I am a student of Cognitive Communication at the University of Szczecin. The application was created in REACT using Routing and API. The application uses a free version of API from NASA, which give access to a different picture and description every day. Let yourself be inspired !</p>
            {/* dodanie nagłówka h2 z opisem */}

        </div>


    {/* //dodanie przycisku */}
    <Przycisk/>

</>
)
}