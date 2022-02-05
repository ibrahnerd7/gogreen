import styles from '../styles/Stat.module.css'
import { useState,useEffect,useRef } from 'react'

export default function CountUp({start=0,end}){

    const [employees,setEmployees,]=useState(0);
    const ref=useRef(0);
    const accumulator=end/200;
  
    const accum_counter=()=>{

        if(ref.current<end){
            const result=Math.ceil(ref.current+accumulator);
            if(result>end) return setEmployees(end);
            setEmployees(result);
            ref.current=result;
            
        }
        
        setTimeout(accum_counter,50); 
        

    };


    useEffect(()=>{
        accum_counter();
    },[end,start]);

    return <h1>{employees}</h1>;
    
   
};
