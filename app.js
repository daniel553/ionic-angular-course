const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const btnCancel = document.querySelector("#btn-cancel");
const btnAdd = document.querySelector("#btn-add");
const expensesList = document.querySelector("#expenses-list");
const totalExpenses = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector('ion-alert-controller');
let total = 0;

const clear = () => {
    console.log('Clear')
    reasonInput.value = '';
    amountInput.value = '';
}

btnAdd.addEventListener("click", () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    console.log("Entered reason", enteredReason);
    console.log("Entered amount", enteredAmount);

    if (enteredReason.trim().length <= 0 ||
        enteredAmount.trim().length <= 0 ||
        enteredAmount <= 0) {
            alertCtrl.create({
                header: 'Invalid inputs',
                message: 'Please enter a valid reason and amount.',
                buttons: ['OK']  
            }).then(alert => {
                alert.present();
            });
        return;
    }

    console.log("Valid input");

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + " $" + enteredAmount;

    expensesList.appendChild(newItem);

    //Convert this string to number.
    total += +enteredAmount;
    totalExpenses.textContent = total;

    clear();
})

btnCancel.addEventListener('click', clear);