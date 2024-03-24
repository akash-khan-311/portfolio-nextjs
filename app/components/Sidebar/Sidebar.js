"use client"

import { useState } from "react";

const Sidebar = () => {
    const [isActive , setIsActive] = useState(true)
    const handleToggle = ()=> {
        setIsActive(!isActive)
    }
    return (
        <div>
            
        </div>
    );
};

export default Sidebar;