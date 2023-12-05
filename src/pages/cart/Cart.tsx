import './Cart.css'
import cartImage from '../../images/CartImage.png'
import CartItem from "./CartItem.tsx";
import {useCart} from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <div className='cart-page'>
      <p className="cart-page-title">Xmas Cart</p>
      <div className="cart-page-cart-content">
        {isEmpty ?
          <div className='cart-page-empty-title'>
            <h1>Your cart is empty</h1>
          </div>
          :
          <div className='cart-page-cart-content-order'>
            <div className='cart-page-cart-items'>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  image={item.image}
                  title={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  updateQuantity={updateItemQuantity}
                  removeQuantity={removeItem}
                  item={item}
                />
              ))}
            </div>
            <div className="cart-page-price-button">
              <p className="cart-page-total-price">Total: ${cartTotal}</p>
              <button className='button'>Checkout</button>
            </div>
          </div>
        }
        <img src={cartImage} alt="cart-image"/>
      </div>
    </div>
  );
}

export default Cart