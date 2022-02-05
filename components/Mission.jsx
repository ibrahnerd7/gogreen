
 import style from '../styles/Mission.module.css'

 export default function Mission(){
 
 
 
 
     return (
 
         <section id={style.Mission}>

             <div id={style.Mission_wrapper}>
                 <img src="flower.jpg" alt="bg" />

                 <div className={style.details}>
                     <h1>
                  
                          Our Mission       
                     </h1>

                     <p>
              
                        We have invested in developing waste solutions for a changing world. Today, this includes not just disposal and recycling, but personal counseling to help customers achieve their green goals, including zero waste.
           
                     </p>

                    <h3>

                    We Adapt to Your Business and Personal Needs
                    </h3>

 
                    <p>
                        Our Company is North America’s largest residential recycler and a renewable energy provider. We recover the naturally occurring gas inside landfills to generate electricity, called landfill-gas-to-energy. With the largest network of recycling facilities, transfer stations and landfills in the industry, our entire business can adapt to meet the needs of every distinct customer segment.
                    
                    </p>


 
                    <h3>

                    Environmental and Economic Sustainability
                    </h3>
 
                    <p>
                    As North America’s leading provider of comprehensive waste management services, our mission is to maximize resource value while minimizing impact in order to further both economic and environmental sustainability for all of our stakeholders.
                        
                    </p>
                </div>

             </div>
         </section>
     )
 }