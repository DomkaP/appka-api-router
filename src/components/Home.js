import React from "react";
 //route służy do tworzenia routingu, a link do używania.   
import { Link } from "react-router-dom";
import Przycisk2 from "./przycisk2";

export default function Home() {
 
  return (
    <>
   <div className="home">
      {/* tworzy link do przeniesienia Be inspired*/}
      <Link className="home-link" to="/Inspiration" >Find inspiration for today!</Link>
    </div>
        
          {/* //dodanie przycisku */}
          <Przycisk2/>
          </>
  );

}