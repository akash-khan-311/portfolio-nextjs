"use client"

const { useEffect } = require("react")
import AOS from 'aos';
import 'aos/dist/aos.css';
 
 const Animation = () => {
    useEffect(() => {
        AOS.init()
     }, [])
    return (
        <div>
            
        </div>
    );
 };
 
 export default Animation;