const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');


test('Cinco euros deberían ser 5.35 dólares', () => {
    let total = fromEuroToDollar(5);
    expect(total).toBeCloseTo(5.35);
});


test('Diez dólares deberían ser 1565 yenes', () => {
    let total = fromDollarToYen(10);
    expect(total).toBeCloseTo(1565);
});


test('2000 yenes deberían ser aproximadamente 11.11 libras', () => {
    let total = fromYenToPound(2000);
    const expected = (2000 / 156.5) * 0.87;
    expect(total).toBeCloseTo(expected);
});

test('100 yenes a libras esterlinas ', () => {
    let totalCien = fromYenToPound(100);
    const expected = (100 / 156.5) * 0.87;
    expect(totalCien).toBeCloseTo(expected); 
});