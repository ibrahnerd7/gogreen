import style from '../styles/About.module.css'


export default function About(){


    return(
        <section id={style.About}>


            <div id={style.About_wrapper}>

                <div id={style.details}>
                    <h1>
                    GoGreen is a leading provider of integrated environmental solutions in the USA.
                    </h1>
                    <p>
                    Our company is the largest environmental solutions provider in North America, serving more than 21 million municipal, commercial and industrial customers in the U.S. and Canada.
                    </p>
                </div>

                <img src="bg.jpg" alt="" />

            </div>


        </section>
    )
}