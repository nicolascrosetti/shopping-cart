

export const Cart = ({cartItems}) => {
    return cartItems.map((item) => {
        return (
            <li>
                <img src={item.image} alt="clothes" />
                <p>{item.name}</p>
            </li>
        );
    });
}