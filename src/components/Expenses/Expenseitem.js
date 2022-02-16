import './Expenseitem.css';
import './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react';

function Expenseitem(props){
//     //documnet.getElement
//     let [newTitle,setNewTitle] = useState("Change Title  ")
//     const [title , setTitle] = useState(props.title);//array destructuring
//     const clickhandler = ()=>{
      

//         setTitle(newTitle);

//     }
//     const changeHandler = (event)=>
//     {
//         setNewTitle(event.target.value);
    // }
   
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>

            <div className='expense-item__description'>
                {/* <h2>{title}</h2> */}
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            {/* <input type='text' value={newTitle} onChange = {changeHandler} />
            <button onClick={clickhandler}>Change Title</button> */}
        </Card>

        
    );
}
export default Expenseitem;