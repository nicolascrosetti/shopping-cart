const cartIcon = require('./icons/cart.png');

export const Bar = ({totalUnits, modalBackground}) => {
    const clickHandler = () => {
        modalBackground.current.style.display = 'flex';
    }

    return (
        <div id='items-bar'>
            <img id="cart-icon" src={cartIcon} alt='cart' onClick={clickHandler} />
            <p>Selected Items: {totalUnits}</p>
        </div>
    );
}
  
