
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');



// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-995456800550090-070600-bd9c592990583a68b0185bd1ad32c83c-78687728'
});

class MercadopagoController{

    async mercadopago ({req}){

    let preference = {
    items: [
        {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
        }
    ]
    };

const res= await mercadopago.preferences.create(preference)

    return res;



    }



}

module.exports= MercadopagoController