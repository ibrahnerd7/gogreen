import style from '../../styles/Header.module.css'
import Navbar from './Navbar'

export default function Header(){

return(

    <header id={style.header} >
        <div id={style.bg} >
            <img src="bg.jpg" alt="" />
            
        </div>


        <div id={style.header_wrapper}>


            <Navbar />



        <div id={style.landin}>

                <h1>
                Providing the industry-leading solutions you need.
                </h1>

                <p>
                Our reliable services protect the environment while allowing your home or business to run like clockwork.
                </p>

                <button>
                    Learn more
                </button>



        </div>
        

        </div>






    </header>


)




}