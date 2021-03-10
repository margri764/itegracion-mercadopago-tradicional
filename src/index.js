const { response } = require('express');
const express = require('express');
const app = express();

// SDK de Mercado Pago
const mercadopago = require('mercadopago');

//middleware
// app.use(express.json);
app.use(express.urlencoded({ extended: false }));


// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-6623451607855904-111502-83c610c2165674e9bba665cfb4aa6b0c-672708410'
  // 'TEST-995456800550090-070600-bd9c592990583a68b0185bd1ad32c83c-78687728'
  // 'APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410'
});




//routes
app.post('/checkout', (req, res) => {


   
  let preference = {
      items: [
        {
          title:req.body.title,
          unit_price: parseInt(req.body.price),
          quantity: 1,
        }
      ]
    };
    
    mercadopago.preferences.create(preference)
    .then(function(response){

      // console.log(response.body);
      // res.send('checkout');
    
      res.redirect(response.body.init_point);
     
    }).catch(function(error){
      console.log(error);
    });
  });
  


// app.get('/checkout', (req, res) => {
//   res.send('hola desde ckeckout')

// });




app.listen(3000, () => {
console.log('Server running on port 3000')
});
