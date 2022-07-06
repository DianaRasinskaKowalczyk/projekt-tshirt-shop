import styles from './SizeOptions.module.scss';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import clsx from 'clsx';


const SizeOptions = ({sizes, setCurrentSize, currentSize}) =>{

return(

<div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>
            {sizes.map(size =>
              <li key={shortid()}>
                  <button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(currentSize === size && styles.active)}>{size.name}</button>
              </li>)}
          </ul>
        </div>
)
}

SizeOptions.propTypes= {
    sizes: PropTypes.array.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
  };

export default SizeOptions;