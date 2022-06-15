import { useEffect, useRef, useState } from "react";
import { Bar } from "./Bar";
import Header from "./Header";
import { ItemList  } from "./ItemList";
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { Cart } from './Cart';

const Shop = () => {
    //State
    const [totalUnits,setTotalUnits] = useState(0);
    const [items, setItems] = useState([
        {name: 'Black T-Shirt', price: 25, id: uuidv4(), units: 1, image: require('./images/blacktshirt.jpg')},
        {name: 'Grey Sweater', price: 35, id: uuidv4(), units: 1, image: require('./images/greysweater.jpg')},
        {name: 'Green Shirt', price: 30, id:uuidv4(), units: 1, image: require('./images/greenshirt.jpg')},
        {name: 'White T-Shirt', price: 25, id:uuidv4(), units: 1, image: require('./images/whitetshirt.jpg')},
        {name: 'Radiohead T-Shirt', price: 27, id:uuidv4(), units: 1, image: require('./images/radioheadtshirt.jpg')},
        {name: 'Black Hoodie', price: 33, id:uuidv4(), units: 1, image: require('./images/blackhoodie.jpg')}
    ]);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    //Ref
    const modalBackground = useRef();

/*     useEffect(() => {
        console.log(total);
    }, [total]); */
 

    const clickHandler = (item) => {
        const newArray = [...cartItems];
        for(let i=0;i<item.units;i++){
            newArray.push(item);
        }
        setCartItems(newArray);
        //Total price
        const newTotal = total + (item.price*item.units);
        setTotal(newTotal);
        //Total units
        const newTotalUnits = totalUnits + item.units;
        setTotalUnits(newTotalUnits);
    } 

    const closeModalClickHandler = () => {
        modalBackground.current.style.display = 'none';
    }

    const handleChange = (inputValue, key) => {
        const newArray = [...items];
        newArray.forEach((element) =>{
            if(element.id == key){
                element.units = parseInt(inputValue);
            }
        });
        setItems(newArray);
    }

    return (
      <div>
        <Header />
        <Bar totalUnits={totalUnits} modalBackground={modalBackground} />
        <div className="container">
            <ItemList items={items} clickHandler={clickHandler} handleChange={handleChange} />
        </div>
        <div className="modal-background" ref={modalBackground}>
            <div className="cart-container">
                <span id="close-modal" onClick={closeModalClickHandler}>X</span>
                <ul id="items-section">
                    <Cart cartItems={cartItems} />
                </ul>
                <div>Total price: ${total} </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Shop;