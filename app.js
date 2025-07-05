const monedas = {
  JPY: 156.5,
  USD: 1.07,
  GBP: 0.87,
};

const fromDollarToYen = (usd) => {
  return usd * monedas.JPY;
}

const fromEuroToDollar = (euros) => {
  return euros * monedas.USD;
}

const fromYenToPound = (yen) => {
  return yen * monedas.GBP;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };










