import Expenses from './components/Expenses/Expenses';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';

// function App(){

//     let expense=[
//         {
//             id:'e1',
//             expenseTitle:"Car Insurance type A",
//             expenseAmount :300,
//             date : new Date(2022,2,9)
//         },
//         {
//             id:'e2',
//             expenseTitle :"School fee",
//             expenseAmount : 200,
//             date : new Date(2022,2,9)
//         },
//         {
//             id:'e3',
//             expenseTitle :"Food",
//             expenseAmount : 500,
//             date : new Date(2022,2,9)
//         },
//         {
//             id:'e1',
//             expenseTitle :"Game",
//             expenseAmount :10,
//             date : new Date(2022,2,9)
//         },
//     ]
//     return (
//         <div>
//                 <h2>Lets go</h2>
//                 <Expenses item={expense}/>

//         </div>
     

//     );
// }


const App=()=>{

    let expense=[
        {
            id:'e1',
            expenseTitle:"Car Insurance type A",
            expenseAmount :300,
            date : new Date(2022,2,9)
        },
        {
            id:'e2',
            expenseTitle :"School fee",
            expenseAmount : 200,
            date : new Date(2022,2,9)
        },
        {
            id:'e3',
            expenseTitle :"Food",
            expenseAmount : 500,
            date : new Date(2022,2,9)
        },
        {
            id:'e1',
            expenseTitle :"Game",
            expenseAmount :10,
            date : new Date(2022,2,9)
        },
    ]
    const addExpenseHandler = (expense)=>{
        console.log("Finally to root (APP)"+expense)
    }
    return (
        <div>
                <NewExpense onAddExpense = { addExpenseHandler}/>
                <Expenses item={expense}/>

        </div>
     

    );
}

export default App;

 