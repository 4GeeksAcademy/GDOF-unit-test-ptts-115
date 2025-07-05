const monedas = {
 usd_Yen: 144.14,
 eur_Usd: 1.18,
 yen_Pound: 0.005
};

const convertir = (monto, origen, destino) => {
    const keys = `${origen}-${destino}`;

    if ( keys in monedas) {
        return monto * monedas[keys]
    }
}





// lo esgaba haciendo de esta manera pero me puse a investigar de como hacerlo con una sola funcion 
// y me recorde a una de las ultimas clases de js donde usabamos keys

//const fromDollarToYen = (dolar) => {
    //return dolar * monedas.usdToYen;
//}
//const fromEuroToDollar = (euro) => {
  //  return euro * monedas.eurToUsd;
//}
//const fromYanToPound = (yen) => {
  //  return yen * monedas.yenToPound;
//}

//console.log(fromEuroToDollar(200));


 