import { useState } from 'react'
 import style from '../../styles/Header.module.css'
import Link from 'next/link'

export default function Navbar(){

    const [navbar,setNavbar]=useState(false);
    const [menu,setMenu]=useState(false);

  

    const changeBackground=()=>{
        console.log(window.scrollY);
        if (window.scrollY>=50){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll',changeBackground);

      }
      
     
    const navbarStyle = {
        marginTop:'50px'
    }
    const navbarStyle_after = {
        backgroundColor:'#111929',
        position:'fixed',
        marginTop:'0px',
        padding:'10px 0'
    }

    const menu_display ={
        display: 'block'
    }
    const menu_hide ={
        display: 'none'
    }

    return (

        <nav id={style.nav}  style={navbar? navbarStyle_after:navbarStyle}>

            <div id={style.nav_wrapper}>

                <div id={style.logo}>
                    <h1>
                        point_blank
                    </h1>
                    <p>
                        your quick fix
                    </p>
                </div>

                <button onClick={()=>{menu?setMenu(false):setMenu(true)}}  >
                    <img src={menu?'cancel.png':'menu.png'} alt="" />
                </button>
                
                <div id={style.mobileMenu} style={menu? menu_display  : menu_hide}>

                <ul>

                    <a href="#">
                        <li>
                            HOME
                        </li>
                    </a>

                    <a href="#">
                        <li>
                            ABOUT US
                        </li>
                    </a>

                    <a href="#">
                        <li>
                            CONTACTS
                        </li>
                    </a>



                </ul>

                </div>

                <ul>

                    <a href="#">
                        <li>
                            HOME
                        </li>
                    </a>




                    <Link href=".About">
                        <a >

                                <li>
                            ABOUT US
                        </li>                    
                        </a>

                    </Link>


                    <a href="#">
                        <li>
                            CONTACTS
                        </li>
                    </a>



                </ul>
            </div>





        </nav>
    )
}