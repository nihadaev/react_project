const initState = {
    products: [],
    popular: [],
    cart: [],
    saleproducts: []
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        //ALL PRODUCTS
        case "ALL_DATA":

            return {
                ...state, products: action.payload
            }
        //ALL PRODUCTS

        //POPULAR PRODUCTS
        case "POPULAR":
            return {
                ...state, popular: action.payload
            }
        //POPULAR PRODUCTS

        //SALE PRODUCTS
        case "SALE":
            return {
                ...state, saleproducts: action.payload
            }
        //SALE PRODUCTS

        // ADD TO CART
        case "ADD":
            return {
                ...state, cart: [...state.cart, state.products.find(e => e.id === action.payload)]
            }
        //ADD TO CART

        
        case "INCCOUNT":
            return {
                ...state, cart: [...state.cart.map(e => {
                    if (e.id === action.payload) {
                        e.count++
                    }
                    return e
                })]

            }
        default:
            return state
    }

}