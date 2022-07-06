import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({title, colors, sizes, name, basePrice }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handleSubmit = e => {
    e.preventDefault();
 
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt= {title}
          src={`${process.env.PUBLIC_URL}/images/products/${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}$</span>
        </header>
      <ProductForm 
        colors={colors} 
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
        sizes={sizes}
        setCurrentSize={setCurrentSize}
        currentSize={currentSize}
        handleSubmit={handleSubmit} />
      </div>
    </article>
  )
};

Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;