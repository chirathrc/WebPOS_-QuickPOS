import CartItemdata from '../../types/CartItem';
import CartItem from './CartItem';

function Cart(props: CartItemdata) {

    return <>
        {
            !props.items.length ?
                <div x-show="cart.length === 0" className="flex-1 w-full p-4 opacity-25 select-none flex flex-col flex-wrap content-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <p>
                        CART EMPTY
                    </p>
                </div>
                :
                <div className="flex-1 w-full px-4 overflow-auto">
                    {
                        props.items.map((cartItem: any, index: number) =>
                            <CartItem
                                key={index}
                                cartItem={cartItem}
                                onQuantityChange={(newQuantity: number) => {
                                    cartItem.quantity = newQuantity;
                                    props.items[index] = cartItem;
                                    props.onCartUpdate([...props.items]);
                                }} />)
                    }
                </div>
        }
    </>

};

export default Cart;