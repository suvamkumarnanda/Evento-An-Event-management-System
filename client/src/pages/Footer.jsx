// import React from 'react'
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function  Footer() {
  return (
    <div className="relative bottom-0 w-full">
      <div className='mt-12 bottom-0 w-full bg-black h-10 flex bg-fixed items-center text-white gap-3'>

        <FaCopyright className=" ml-24  h-5 "/>
          2024 India Evento ,Inc.All rights reserved



          <section className="menu">
               
               <ul>
                  <Link to={"/about"}> <li>About</li></Link>
                   <Link to={"/contact"}><li>Contact</li></Link>
                  <Link to={"/help"}> <li>Help</li></Link>
                   <li>More</li>

               </ul>
           </section>

      </div>
    </div>
  )
}
