
 import style from '../styles/Footer.module.css'
    import Link from 'next/link'
 export default function Footer(){
 
 
 
 
     return (
        <footer id={style.footer}>

            <div id={style.footer_wrapper}>
                <div id={style.info}>
                    <div id={style.logo}>
                    <h1>
                        point_blank
                    </h1>
                    <p>
                        your quick fix
                    </p>
                    </div>


                    <h5>

                    We’re the leading provider of comprehensive waste management services, providing services that range from collection and disposal to recycling and renewable energy generation.

                    </h5>
                    <h4>
                    140 Horizon Circle, San Diego, CA

                    (123) 456-7890
                    </h4>
                    <a href="#">
                    gogreen@support.com
                    </a>



                </div>

                <form action="#">
                    <h1>
                        Contact information
                    </h1>

                    <input type="text" placeholder="name*" required />

                    <input type="email" placeholder="email*" required/>
                    <textarea name="message" id="message" cols="30" placeholder="message*" required rows="5"></textarea>

                    <button type="submit">
                        SEND MESSAGE
                    </button>
                </form>

            </div>



            <div className={style.copy}>
                <p>
                © 2021 Point_blank. All rights reserved. Privacy policy
                </p>
            </div>
            <Link href="/">
                        <a  id={style.home_link}>
                <img src="up.png" alt="home" />
            </a>
            
            </Link>




        </footer>
     )
 }