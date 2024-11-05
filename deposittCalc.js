const calcDays = (pStartDate, pEndDate) => {
  const diffTime = Math.abs(pEndDate - pStartDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const calcInt = (pAmt, pIntRateMonth, pStartDate, pEndDate) => {
  let intDay = (pAmt * pIntRateMonth * 12) / 100 / 365;
  let days = calcDays(pStartDate, pEndDate);
  return Math.round(intDay * days * 100) / 100;
};

export const calcDeposit = (pStartAmt, pIntRateMonth, pTermMonth, pAddMonth) => {
  let date1 = new Date(),
    date2 = new Date();

  let amt = pStartAmt;
  let accrAmt = 0;
  for (let i = 1; i <= pTermMonth; i++) {
    date1 = new Date(date2);
    date2 = new Date(new Date(date1).setMonth(date1.getMonth() + 1));

    accrAmt += calcInt(amt, pIntRateMonth, date1, date2);
    amt += pAddMonth;

    amt = Math.round(amt * 100) / 100;
  }

  amt += accrAmt;
  amt = Math.round(amt * 100) / 100;
  return amt;
};

