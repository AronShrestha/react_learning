import React from 'react';
import Card from '../UI/Card';
import Expenseitem from './Expenseitem';
import './Expenses.css'


function Expenses(props){
    return(
        <Card className='expenses'>
            <Expenseitem 
                   amount={props.item[0].expenseAmount} 
                   title={props.item[0].expenseTitle} 
                   date={props.item[0].date}/>
                   <Expenseitem 
                        amount={props.item[1].expenseAmount} 
                        title={props.item[1].expenseTitle} 
                        date={props.item[1].date}/>
                   <Expenseitem 
                   amount={props.item[2].expenseAmount} 
                   title={props.item[2].expenseTitle} 
                   date={props.item[2].date} />
        </Card>
    )

}
 export default Expenses;