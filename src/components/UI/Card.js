import './card.css';
import React from 'react';

// function Card(props){
//     const classes ='card ' + props.className;
//     console.log(classes);
//     return(
     
//         <div className={classes}>{props.children}</div>
//     );
// }

const Card = (props) =>{
    const classes ='card ' + props.className;
    console.log(classes);
    return(
     
        <div className={classes}>{props.children}</div>
    );
}

export default Card;