import styles from '../styles/Services.module.css'


export default function Services(){


    return(
        <section id={styles.services}>

            <h3>
                What we offer
            </h3>
            <h2>
                Our services
            </h2>

            <div id={styles.services_card}>

                <div className={styles.card}>
                    <img src="./bg.jpg" alt="" />
                    <div className="text">
                        <h4>
                            Waste Pickup
                        </h4>
                        <ul>
                            <li>Scheduled Waste Pickup</li>
                            <li>Dumpster Rental</li>
                            <li>Hazardous Waste</li>
                            <li>Disposal</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="./bg.jpg" alt="" />
                    <div className="text">
                        <h4>
                        Recycling Services
                        </h4>
                        <ul>
                            <li>Food and Organic</li>
                            <li>Waste Pickup</li>
                            <li>Recycling Pickup</li>
                            <li>Battery Recycling</li>
                        </ul>
                    </div>
                </div>


                <div className={styles.card}>
                    <img src="./bg.jpg" alt="" />
                    <div className="text">
                        <h4>
                                                        
                        Other Waste Services
                        </h4>
                        <ul>
                            <li>Landfill & Facilities</li>
                            <li>Bulk Waste Pickup</li>
                            <li>Document and Product Destruction</li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}