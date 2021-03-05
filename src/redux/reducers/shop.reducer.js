import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART
} from '../../actions';

//import {phones} from "../data/samples";

const phones = [{
    "title": "First shop bordeaux",
    "category": "phone",
    "images": ["https://i.picsum.photos/id/330/200/300.jpg?hmac=OE_HfmA_n_pZkD12G7SLDyB8rBchemKj6Lcn1y_8Msc","https://i.picsum.photos/id/330/200/300.jpg?hmac=OE_HfmA_n_pZkD12G7SLDyB8rBchemKj6Lcn1y_8Msc"],
    "brand": "appleShop 1",
    "note": 8,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 0,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
}, {
    "title": "Second shop talence",
    "category": "phone",
    "images": ["https://i.picsum.photos/id/56/200/300.jpg?hmac=XmVgSk2B8hc9Smojh4o14JnHBHBM8Gj0ePS78sxZbzI","https://i.picsum.photos/id/330/200/300.jpg?hmac=OE_HfmA_n_pZkD12G7SLDyB8rBchemKj6Lcn1y_8Msc"],
    "brand": "huawei",
    "note":5,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
}, {
    "title": "third shop bordeaux",
    "category": "phone",
    "images": ["https://i.picsum.photos/id/120/200/300.jpg?hmac=MG0pF8PmFWKEzuFPIWwUw15CadARgBh6cxPh_YuAALY","https://i.picsum.photos/id/330/200/300.jpg?hmac=OE_HfmA_n_pZkD12G7SLDyB8rBchemKj6Lcn1y_8Msc"],
    "brand": "huawei",
    "note": 7,
    "cpu": "1.3GHz Apple A6",
    "camera": "8mp (3264x2448)",
    "size": "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
    "weight": "132 grams (4.7 ounces) with battery",
    "display": "4.0 326 pixel density",
    "battery": "1480 mAh",
    "memory": "16GB, 32GB and RAM 1 GB",
    "id": 2,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
}, ]


const initialState = {
    products: phones,
    cart: []
};



const shopReducer = (state = initialState, action ) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return {...state, cart: updatedCart};

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return {...state, cart: updatedCart};

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if(updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return {...state, cart: updatedCart};
        default:
            return state;

    }
};

export default shopReducer;
