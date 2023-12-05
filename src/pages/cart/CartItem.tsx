import './Cart.css'
import closeIcon from "../../images/close.png";
import {Item} from "react-use-cart";
import {toast} from "react-toastify";

interface ICart {
  image: string;
  title: string;
  price: number;
  quantity?: number | undefined;
  updateQuantity: (id: string, quantity: number) => void;
  removeQuantity: (id: string) => void;
  item: Item
}

function Cart({ image, title, price, quantity, updateQuantity, removeQuantity, item }: ICart) {
  const handleRemoveItem = () => {
    removeQuantity(item.id)
    toast.success(`${item.name} was removed from cart`)
  }

  return (
    <div className="cart-page-cart-item">
      <img src={image} alt="xmas-tree" className='cart-page-cart-item-image'/>
      <p className="cart-page-cart-item-title">{title}</p>
      <div className="cart-page-cart-item-amount-component">
        <div className='cart-page-cart-item-amount-option' onClick={() => updateQuantity(item.id, (item.quantity ?? 0) - 1)}>-</div>
        <p className='cart-page-cart-item-amount'>{quantity}</p>
        <div className='cart-page-cart-item-amount-option' onClick={() => updateQuantity(item.id, (item.quantity ?? 0) + 1)}>+</div>
      </div>
      <p className="cart-page-cart-item-price">${price}</p>
      <img src={closeIcon} alt="close-icon" className='cart-page-cart-item-close-image' onClick={handleRemoveItem}/>
    </div>
  );
}

export default Cart