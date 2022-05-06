const initState = {
    products: [],
    popular: [],
    cart: [],
    saleproducts: [],
    subscribers: [],
    wish: [],
    story: [],
    usercontacts: []
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

        case "STORY":
            return {
                ...state, story: action.payload
            }
        // ADD TO CART
        case "ADD":
            return {
                ...state, cart: [...state.cart, state.products.find(e => e.id === action.payload)]
            }
        //ADD TO CART
        
        //ADD TO WISHLIST
            case "WISH": 
            return {
                ...state, wish: [...state.wish,state.products.find(e => e.id === action.payload)]
            }
        //ADD TO WISHLIST

        case "DELETEFROMWISH":
            return {
                ...state, wish: [...state.wish.filter(e => e.id !== action.payload)]
            }
        
        case "INCCOUNT":
            return {
                ...state, cart: [...state.cart.map(e => {
                    if (e.id === action.payload) {
                        e.count++
                    }
                    return e
                })]

            }
        case "DELETE": 
            return {
                ...state, cart: [...state.cart.filter(e => e.id !== action.payload)]
            }
        case "DEGCOUNT":
            return {
                ...state, cart: [...state.cart.map(e => {
                    if (e.id === action.payload) {
                    e.count--
 
                    }
                    return e
                 })]
    
            }

        case "TOTAL": 
            return {
                ...state, cart: [...state.cart.map(e => {
                    if (e.id === action.payload) {
                        e.total =  e.price * e.count
                    }
                    return e
                })]
            }
            
            case "SENDUSER":

                return {
                    ...state, usercontacts: [...state.usercontacts, action.payload]
                }

            //SEND SUBSCRIBER
                case "SUBSCRIBE" :
               return {
                    ...state, subscribers: [...state.subscribers, action.payload]
                }
            //SEND SUBSCRIBER
        default:
            return state
    }

    

}