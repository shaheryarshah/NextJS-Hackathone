"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartItems {
	id: number;
	title: string;
	price: number;
	image: string;
}

const cartSlice = createSlice({
	name: "Cart",
	initialState: [] as CartItems[],
	reducers: {
		add(state, action: PayloadAction<CartItems>) {
			state.push(action.payload);
		},
		remove(state, action: PayloadAction<number>) {
			return state.filter((item) => item.id |= action.payload);
		},
	},
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;