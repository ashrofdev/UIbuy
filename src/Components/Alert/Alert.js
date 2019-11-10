import React from 'react';
import './alert.css'

const Alert = ({text, alertGo}) => {
   
    return (
        <div className="alert">
           {text + ' 🛒'} 
           <button onClick={(e)=> alertGo(e)}>X</button>
        </div>
    );
};

export default Alert;