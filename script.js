const transactionsUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

console.log(inputTransactionName);
console.log(inputTransactionAmount);

// objeto ficticio
const dummyTransactions = [
    {id: 1, name: 'Torta de limão', amount: -20},    
    {id: 2, name: 'Salário', amount: 100000},    
    {id: 3, name: 'Torta de frango com catupri', amount: -100},    
    {id: 4, name: 'PC Gamer', amount: -8000}    
]

const handleFormSubmit = event =>{
    if(inputTransactionName.value.trim() === '' || inputTransactionAmount.value.trim() === ''){
        alert('Informe a descrição e o valor da transação');       
    }    
}

form.addEventListener('submit', handleFormSubmit);

const addTransactionDOM = transaction => {
    const li = document.createElement('li')
    li.innerHTML = `${transaction.name}`
    //atribuindo um nó ao li
    transactionsUl.append(li);
}

const updateBalanceValues = () => {
    const inputTransactionAmounts = dummyTransactions.map(({ amount }) => amount)
    console.log('Somente os valores : ' + inputTransactionAmounts);

    const total = inputTransactionAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente os valores positivos : ' + income);

}


const init = () =>{
    dummyTransactions.forEach(addTransactionDOM);
}

init(); 