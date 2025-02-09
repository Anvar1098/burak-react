import  { createSelector } from "reselect";
import { AppRootState, HomePageState } from "../../../lib/types/screen";
import HomePage from ".";

// Selector => Storedan datani uqiydi! (reselect orqali uqiydi)

const selectHomePage = (state: AppRootState) => state.homePage;


export const retrievePopularDishes = createSelector(
    selectHomePage,
    // (state: AppRootState) => state.homePage
    (HomePage: HomePageState) => HomePage.popularDishes
);

export const retrieveNewDishes = createSelector(
    selectHomePage,
    (HomePage: HomePageState) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
    selectHomePage,
    (HomePage: HomePageState) => HomePage.topUsers
);