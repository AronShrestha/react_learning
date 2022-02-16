import './ExpenseDate.css';
import React from 'react';

// function ExpenseDate(props){
//     const year = props.date.getFullYear();
//     const month =props.date.toLocaleString('en-US',{month:'long'});
    
//     const day =props.date.toLocaleString('en-US',{day:'2-digit'});

//     return(

//         <div className='expense-date '>
//         <div className='xpense-date__year'>{year}</div>
//         <div className='xpense-date__month'>{month}</div>
//         <div className='xpense-date__day'>{day}</div>
//     </div>
//     );
// }

const ExpenseDate=(props)=>{
    const year = props.date.getFullYear();
    const month =props.date.toLocaleString('en-US',{month:'long'});
    
    const day =props.date.toLocaleString('en-US',{day:'2-digit'});

    return(

        <div className='expense-date '>
        <div className='xpense-date__year'>{year}</div>
        <div className='xpense-date__month'>{month}</div>
        <div className='xpense-date__day'>{day}</div>
    </div>
    );
}
export default ExpenseDate;