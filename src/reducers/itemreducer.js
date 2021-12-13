const initialState ={
    items: [],
};

const itemReducer = (state=initialState,action) => {
    switch(action.type) {
        case  "GET_ITEMS":
            return {...state, items: action.payload};
    
        // case "ADD_ITEM":
        //     return { ...state, items: [...items, action.payload] }; // [p1, p2, p3, p4]
        // case "DELETE_ITEM":
        //     const items = state.items.filter((i) => i.id !== action.payload.id); // p1, p3
        //     return { ...state, items: items };
        // case "UPDATE_ITEM":
        //     return state.items.map((i) =>
        //       i.id === action.payload.id ? action.payload : i
        //         );
        default:
            return state;
            }
          };
          export default itemReducer;