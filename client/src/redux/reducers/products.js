export const Types = {
    PRODUCTS: {
        LOAD: ' PRODUCTS/LOAD',
        LOAD_SUCCESS: 'PRODUCTS/LOAD/SUCCESS',
        LOAD_FAILED: 'PRODUCTS/LOAD/FAILED',
    },
};

const initialState = {
    products: [],
    loading: false,
    error: null
};

// reducers
export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.PRODUCTS.LOAD:
            return {
                ...state,
                loading: true,
            };

        case Types.PRODUCTS.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };

        case Types.PRODUCTS.LOAD_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return {
                ...state,
            };
    }
};

// action creators
export const loadProducts = () => {
    return {
        type: Types.PRODUCTS.LOAD
    };
};

// selectors
export const getProducts = state => state.productsReducer.products;

export const isLoading = state => state.productsReducer.loading;