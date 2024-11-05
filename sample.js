import { calcLoanAmt } from "./loanCalc.js";
import { calcDeposit } from "./depositCalc.js";


console.log("Deposit:", calcDeposit(100000, 5, 36, 50000));
console.log("Loan:", calcLoanAmt(1000000, 5, 12));
