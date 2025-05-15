const bankAccount = {
    owner: "Alice",
    balance: 500
}

let deposit = 200;
let withdrawal = 1000;


const getDeposit = function(amount){
    let result = deposit + bankAccount.balance;
    return result;

}

const getWithdrawal = function(amount){
    let result = 0;
    if(withdrawal >  bankAccount.balance){
        return `Cant complete transaction!!! Withdrawal amount is greater than balance`
    }

    else{
        result = bankAccount.balance - withdrawal
    }
    return result;

}

console.log(getDeposit());
console.log(getWithdrawal());