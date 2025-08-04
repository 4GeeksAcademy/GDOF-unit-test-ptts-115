const monedas = {
  JPY: 156.5,
  USD: 1.07,
  GBP: 0.87,
};

const fromDollarToYen = (euros) => {
  return euros * monedas.JPY;
}

const fromEuroToDollar = (euro) => {
  return euro * monedas.USD;
}

const fromYenToPound = (yen) => {
  let euros = yen / monedas.JPY;
  return euros * monedas.GBP
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };










