import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import ColorOptions from '../ColorOptions/ColorOptions';
import SizeOptions from '../SizeOptions/SizeOptions';
import PropTypes from 'prop-types';


const ProductForm = (colors, setCurrentColor, currentColor, sizes, setCurrentSize, currentSize, handleSubmit) =>{

    return(
        <form onSumit={handleSubmit}>
        <ColorOptions colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor} />
        <SizeOptions sizes={sizes} setCurrentColor={setCurrentSize} currentSize={currentSize} />
        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>

    )

}

ProductForm.propTypes= {
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

export default ProductForm;