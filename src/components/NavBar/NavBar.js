import NavBarItems from "./NavBarItems";
import logo from "../../logo.png";
import React, { useRef,useState } from 'react';

function NavBar(){
        
        const [show,setShow]=useState(true);
    
    let data=[
            {label:"Inicio",uri:"/"},
            {label:"Maquillaje",uri:"/maquillaje"},
            {label:"Cabello",uri:"/cabello"},
            {label:"Cuidado Personal",uri:"/cuidado"},
            {label:"Temporada",uri:"/temporada"},
            {label:"Natural",uri:"/natural"},
            {label:"Consejos",uri:"/consejos"},
            {label:"Suscribirse",uri:"/suscribirse"}

    ];

    let navBarItem=data.map((o,i)=>{
        return <NavBarItems label={o.label} uri={o.uri} key={i}></NavBarItems>
    });
   
    

    return(
        
       
        <nav class="w-full flex  flex-col ">
            <section class="flex justify-between lg:justify-center md:justify-center">
                <img src={logo} alt="logo" class=" justify-center h-24 lg:h-48 md:h-48"/>
                <div>
                <button  onClick={()=>setShow(!show)} class="block lg:hidden md:hidden cursor-pointer ml-auto relative w-14 h-14 p-4 mt-3 mr-2" >
                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>

                </div>
            </section>
            { 
            show?<ul class=" bg-red-200  flex justify-center items-center lg:justify-between md:justify-between lg:visible md:visible lg:p-4 flex-col lg:flex-row  md:flex-row text-lg ">
                {navBarItem}
                </ul>:null}
              
            
        </nav>
       
       
    );
}
export default NavBar;
