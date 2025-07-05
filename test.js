const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js'); // remplaza './archivo' con tu archivo

test("Un euro debería ser 1.07 dólares", function () {
  const { fromEuroToDollar } = require('./app.js');
  const resultado = fromEuroToDollar(3.5);
  const esperado = 3.745;
  expect(resultado).toBeCloseTo(esperado);
});

test("Un dólar debería ser 156.5 yenes", function () {
  const { fromDollarToYen } = require('./app.js');
  const resultado = fromDollarToYen(2);
  const esperado = 313;
  expect(resultado).toBeCloseTo(esperado);
});

test("1000 yenes deberían ser 870 libras", function () {
  const { fromYenToPound } = require('./app.js');
  const resultado = fromYenToPound(1000);
  const esperado = 870;
  expect(resultado).toBeCloseTo(esperado);
});