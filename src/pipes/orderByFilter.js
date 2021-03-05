import {ORDER_BY_ASC} from "../actions";

export const orderByFilter = (arr, type ) => {
    if(!type) return arr;
    console.log('orderbYmethod', type);
    if(type === 'asc') {
        return arr.slice().sort((el1, el2) => el1.note - el2.note);
    } else {
        return arr.slice().sort((el1, el2) => el2.note - el1.note);
    }
};