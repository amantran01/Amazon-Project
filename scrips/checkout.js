import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch} from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
    //console.log('Load page');
    try {
        await loadProductsFetch();

       const value=await new Promise((resolve) =>{
          loadCart(() =>{
            resolve('Value3');
        });
    });

    } catch (error) {
        console.log('unexpected Error.please try again later');
    }

    
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();
/*
Promise.all([
   loadProducts(),
    new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    })

]).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
})
    */

/*
new Promise((resolve) =>{
    loadProducts(() =>{
        resolve();
    });

}).then(() =>{
    return new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    });
    }).then(() =>{
        renderOrderSummary();
        renderPaymentSummary();
    });

    */
   

/*
loadProducts(() =>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/
