

// import React, { useState } from 'react';
// import CheckoutForm from './components/CheckoutForm';
// import './AddCart.css';

// const AddCart = ({ cart, setCart }) => {
//   const [isCheckout, setIsCheckout] = useState(false);
//   const [orderConfirmed, setOrderConfirmed] = useState(false);

  
//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   const handlePlaceOrder = (details) => {
//     console.log('Order Details:', details);
//     alert('Your order has been placed!');
//     setCart([]);
//     setOrderConfirmed(true);
//   };

//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       {orderConfirmed ? (
//         <p>Your order is done!</p>
//       ) : (
//         <>
//           {cart.length === 0 ? (
//             <p>Your cart is empty</p>
//           ) : (
//             <>
//               <ul className="cart-items">
//                 {cart.map((item, index) => (
//                   <li key={index} className="cart-item">
//                     <img src={item.image} alt={item.title} className="cart-item-image" />
//                     <div className="cart-item-details">
//                       <h3>{item.title}</h3>
//                       <p>Quantity: {item.quantity}</p>
//                       <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
              
//               <div className="cart-total">
//                 <h3>Total Price: ${getTotalPrice()}</h3>
//               </div>
//               <button
//                 onClick={() => setIsCheckout(true)}
//                 className="place-order-button"
//               >
//                 Checkout
//               </button>
//             </>
//           )}
//           {isCheckout && <CheckoutForm onPlaceOrder={handlePlaceOrder} />}
//         </>
//       )}
//     </div>
//   );
// };

// export default AddCart;

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import CheckoutForm from './components/CheckoutForm';
import './AddCart.css';



const AddCart = ({ cart, setCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Order Summary', 20, 20);

    let y = 30;
    cart.forEach((item, index) => {
      doc.setFontSize(12);
      doc.text(`${index + 1}. ${item.title}`, 20, y);
      doc.text(`Quantity: ${item.quantity}`, 20, y + 10);
      doc.text(`Total: $${(item.price * item.quantity).toFixed(2)}`, 20, y + 20);
      y += 30;
    });

    doc.setFontSize(16);
    doc.text(`Total Price: $${getTotalPrice()}`, 20, y + 10);

    doc.save('order-summary.pdf');
  };

  const handlePlaceOrder = (details) => {
    console.log('Order Details:', details);
    alert('Your order has been placed!');
    generatePDF();
    setCart([]);
    setOrderConfirmed(true);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {orderConfirmed ? (
        <p>Your order is done! Check your PDF for the order summary.</p>
      ) : (
        <>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.title}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-total">
                <h3>Total Price: ${getTotalPrice()}</h3>
              </div>
              <button
                onClick={() => setIsCheckout(true)}
                className="place-order-button"
              >
                Checkout
              </button>
            </>
          )}
          {isCheckout && <CheckoutForm onPlaceOrder={handlePlaceOrder} />}
        </>
      )}
    </div>
  );
};

export default AddCart;
