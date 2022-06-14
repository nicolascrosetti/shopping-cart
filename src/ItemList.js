import {Item} from './Item';

export const ItemList = ({items, clickHandler, handleChange}) => {

    return items.map((item) => {
        return <Item handleChange={handleChange} onClick={() => {clickHandler(item)}} name={item.name} price={item.price} image={item.image} id={item.id} key={item.id} units={item.units} />;
    });
}