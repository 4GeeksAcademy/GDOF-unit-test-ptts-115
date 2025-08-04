const monedas = {
  JPY: 156.5, 
  USD: 1.07, 
  GBP: 0.87  
};


const fromDollarToYen = (dolar) => {
  const euro = dolar / monedas.USD;
  return euro * monedas.JPY;
};


const fromEuroToDollar = (euro) => {
  return euro * monedas.USD;
};


const fromYenToPound = (yen) => {
  const euro = yen / monedas.JPY;
  return euro * monedas.GBP;
};


const fromToEuro = (amount, currency) => {
  return amount / monedas[currency];
};

module.exports = {
  fromDollarToYen,
  fromEuroToDollar,
  fromYenToPound,
  fromToEuro
};










