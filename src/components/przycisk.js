import React from 'react'
import {Link} from 'react-router-dom' 


export default function Przycisk() {

return (
<div className="przycisk"
>
    <ul>
        <Link className="link" to="/">Take me home</Link>
    </ul>
    </div>
    );
}