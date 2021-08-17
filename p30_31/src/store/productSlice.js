import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("fetchProducts", async (limit) => {
	const products = await fetch(
		`https://fakestoreapi.com/products?limit=${limit}`
	).then((response) => response.json());
	return products;
});

const product = createSlice({
	name: "product",
	initialState: { items: [], currentItem: null },
	reducers: {
		saveCurrentItem: (state, action) => {
			state.currentItem = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.items = action.payload;
		});
	},
});

export default product.reducer;
export const { saveCurrentItem } = product.actions;
export { fetchProducts };
