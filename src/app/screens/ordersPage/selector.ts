import { createSelector } from "reselect";
import { AppRootState, OrdersPageState } from "../../../lib/types/screen";


// Selector => Storedan datani uqiydi! (reselect orqali uqiydi)

const selectOrdersPage = (state: AppRootState) => state.ordersPage;


export const retrievePausedOrders = createSelector(
    selectOrdersPage,
    // (state: AppRootState) => state.homePage
    (OrdersPage: OrdersPageState) => OrdersPage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
    selectOrdersPage,
    (OrdersPage: OrdersPageState) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
    selectOrdersPage,
    (OrdersPage: OrdersPageState) => OrdersPage.finishedOrders
);