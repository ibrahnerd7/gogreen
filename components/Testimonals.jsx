import styles from '../styles/Testimonals.module.css'


export default function Testimonals(){


    return(
        <section id={styles.Testimonals}>

            <h3>
            WHAT CLIENTS SAY
            </h3>
            <h2>
            Testimonials   
            </h2>

            <div id={styles.Testimonals_card}>

                <div className={styles.card}>
                    <img src="left-.png" alt="" />

                    <span>
                        <p>

                            My company has only worked in partnership with GoGreen for a short time but we are already seeing the benefits of working with such a progressive company that welcomes client input, maintains regular contact and provides excellent services at a competitive price.

                        </p>
                        <h4>
                        Robert Smith
                        </h4>



                    </span>
                    
                </div>




                <div className={styles.card}>
                    <img src="left-.png" alt="" />

                    <span>
                        <p>

                            My company has only worked in partnership with GoGreen for a short time but we are already seeing the benefits of working with such a progressive company that welcomes client input, maintains regular contact and provides excellent services at a competitive price.

                        </p>
                        <h4>
                        Robert Smith
                        </h4>



                    </span>
                    
                </div>

            </div>



        </section>
    )
}