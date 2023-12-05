import './Products.css'
import leftCarousel from '../../images/left-carousel.png'
import rightCarousel from '../../images/right-carousel.png'
import productsData from '../../data/products.json'
import {useEffect, useState} from "react";
import {useCart} from "react-use-cart";
import {toast} from "react-toastify";

interface IProduct {
  id: string
  name: string
  description: string
  price: number
  image: string
}

function Products() {
  const {addItem} = useCart()

  const products: IProduct[] = productsData;

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? productsData.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === productsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSelectProduct = (index: number) => {
    setCurrentProductIndex(index)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        handleLeftClick();
        break;
      case 'ArrowRight':
        handleRightClick();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleAddToCart = () => {
    const currentProduct = products[currentProductIndex]
    addItem({
      id: currentProduct.id,
      name: currentProduct.name,
      description: currentProduct.description,
      price: currentProduct.price,
      image: currentProduct.image
    })

    toast.success(`${currentProduct.name} added to cart`)
  }

  return (
    <div className='products-page'>
      <div className="product-page-content">
        <img src={leftCarousel} alt="left-carousel" className='product-page-content-carousel-image' onClick={handleLeftClick}/>
        <div className="product-page-product-content">
          <div className="product-content-info">
            <h1 className='product-content-info-title'>{products[currentProductIndex].name}</h1>
            <p className='product-content-info-description'>{products[currentProductIndex].description}</p>
            <div className="product-content-info-price-button">
              <p className='product-content-info-price'>${products[currentProductIndex].price}</p>
              <button className='button' onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
          <img src={products[currentProductIndex].image} alt='product-image' className='products-page-product-image' />
        </div>
        <img src={rightCarousel} alt="right-carousel" className='product-page-content-carousel-image' onClick={handleRightClick}/>
      </div>
      <div className='products-page-slider-component'>
        {productsData.map((_, index) => (
          <div key={index} className={`product-page-slider-dot ${index === currentProductIndex ? 'active' : ''}`} onClick={() => handleSelectProduct(index)}/>
        ))}
      </div>
    </div>
  );
}

export default Products