import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";


// Slice => Store ga data yuklaydi!

const initialState: HomePageState = {  // initialState hosil qilindi (HomePageState ni boshlangich qiymati)
    popularDishes: [],
    newDishes: [],
    topUsers: [],
};

const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {                 // reducer => asosiy vazifasi storega data joylashtiradi
        setPopularDishes: (state, action) => {
            state.popularDishes = action.payload;
        },
        setNewdishes: (state, action) => {
            state.newDishes = action.payload;
        },
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        },
    },
});

export const {setNewdishes, setTopUsers, setPopularDishes} =    //  bunaqa qilish faqat Storega yozish uchun!
    homePageSlice.actions;  // action malumotni dispatchdan oladi shuni uchun alohida tashqariga export qilamiz


const HomePageReducer = homePageSlice.reducer;             // Store ga connect qilish uchun export qilindi
export default HomePageReducer;