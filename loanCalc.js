const calcEmi = (
  pLoanSize,
  pIntMonth,
  pLoanTermMonth
) => {
  let emi;

  let r = pIntMonth / 100;
  let b1 = Math.pow(1 + r, pLoanTermMonth);

  emi = (pLoanSize * r * b1) / (b1 - 1);

  return Math.round(emi * 100) / 100;
};

export const calcLoanAmt = (
  pLoanSize,
  pIntMonth,
  pLoanTermMonth
) => {
  let emi = calcEmi(pLoanSize, pIntMonth, pLoanTermMonth);
  return {
    emi,
    total: emi * pLoanTermMonth,
  };
};
