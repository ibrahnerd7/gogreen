import styles from '../styles/Faq.module.css'


export default function Faq(){


    return(
        <section id={styles.Faq}>

            <h3>
               FREQUENTLY ASKED QUESTIONS
            </h3>
            <h2>
                FAQ     
            </h2>

            <div id={styles.Faq_card}>

                <div className={styles.card}>
                    <h4>
                    How do I dispose of hazardous materials?
                    </h4>
                    <p>
                    To check the availability of these services in your area, enter your zip code in the residential service finder.
                    </p>
                    
                </div>

                <div className={styles.card}>
                    <h4>
                    What are the hours of the collection?
                    </h4>

                    <p>
                    Service hours are Monday - Friday from 6:00 am to 6:00 pm.
                    </p>

                </div>


                <div className={styles.card}>

                    <h4>
                    How do I recycle used motor oil? Filters? Other auto fluids?

                    </h4>

                    <p>
                    Place one-gallon screw-top containers, curbside beside the carts you have set out.
                    </p>

                </div>

            </div>

            <button>
                GO TO FAQ
            </button>

        </section>
    )
}