

export const Item = ({name,id,price,image,units,onClick,handleChange}) => {

    return(
        <div className='item'>
            <img src={image} />
            <h4>{name}</h4>
            <p>${price}</p>
            <input type="text"placeholder="0" value={units} onChange={(e)=> handleChange(e.target.value, id)} />
            <button onClick={onClick}>Add to Cart</button>
        </div>
    );
}