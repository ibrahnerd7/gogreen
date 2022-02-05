import styles from '../styles/Stat.module.css'
import { useState,useEffect,useRef } from 'react'
import CountUp from './countUp';


export default function Stat(){

   




    return(
        <section id={styles.Stat} >


            <span>




                <div className={styles.card}>
                    <CountUp end={500}/>
                    <p>
                        EMPLOYEES
                    </p>

                </div>


                <div className={styles.card}>
                <CountUp end={124}/>
                    <p>
                        OFFICES
                    </p>

                </div>


                <div className={styles.card}>
                <CountUp end={1500}/>
                    <p>
                        CLIENTS
                    </p>

                </div>


                <div className={styles.card}>
                <CountUp end={35}/>
                    <p>
                            AWARDS
                    </p>

                </div>
            </span>



        </section>
    )
}