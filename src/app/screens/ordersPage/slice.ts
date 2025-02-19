import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";


// Slice => Store ga data yuklaydi!

const initialState: OrdersPageState = {  // initialState hosil qilindi (HomePageState ni boshlangich qiymati)
    pausedOrders: [],
    processOrders: [],
    finishedOrders: [],
};

const ordersPageSlice = createSlice({
    name: 'ordersPage', 
    initialState,
    reducers: {                 // reducer => asosiy vazifasi storega data joylashtiradi
        setPausedOrders: (state, action) => {
            state.pausedOrders = action.payload;
        },
        setProcessOrders: (state, action) => {
            state.processOrders = action.payload;
        },
        setFinishedOrders: (state, action) => {
            state.finishedOrders = action.payload;
        },
    },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } = ordersPageSlice.actions;  


const OrdersPageReducer = ordersPageSlice.reducer;              
export default OrdersPageReducer;