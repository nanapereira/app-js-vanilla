const transactionsUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount= document.querySelector('#amount');

const addTransactionIntoArray = (inputTransactionName, inputTransactionAmount) => {
    dummyTransactions.push({
        id: 123,
        name: inputTransactionName,
        amount: inputTransactionAmount
    })
}

const handleFormSubmit = event =>{
    event.preventDefault();
    if(inputTransactionName.value.trim() === '' || 
                inputTransactionAmount.value.trim() === ''){
      alert('Informe a descrição e o valor da transação');
      return
    }
    addTransactionIntoArray(inputTransactionName, inputTransactionAmount);
}

form.addEventListener('submit', handleFormSubmit);

///////////////////////////////////////////////////

let dummyTransactions = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salario', amount: 300 },
    { id: 3, name: 'Torta de frango', amount: -10 },
    { id: 4, name: 'Violão', amount: 150 }
]

                            // é o parametro da funcao
const addTransactionIntoDOM = transaction =>{
    const li = document.createElement('li')

    li.innerHTML = `${transaction.name}`
    //atribuindo um nó para o li
    transactionsUl.append(li);
}

const init = () =>{
    dummyTransactions.forEach(addTransactionIntoDOM);
}

init();