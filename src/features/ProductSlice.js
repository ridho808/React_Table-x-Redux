import {createSlice,createAsyncThunk,createEntityAdapter,} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProduct = createAsyncThunk('/products/getProduct',async () => {
    const Response = await axios.get('http://localhost:5000/Product');
    return Response.data;
});
const ProductEntity = createEntityAdapter({
    selectId : (product) => product.id
})
const ProductSlice = createSlice({
    name : "Product",
    initialState: ProductEntity.getInitialState(),
    extraReducers : {
      [getProduct.fulfilled] : (state,action) => {
            ProductEntity.setAll(state,action.payload); 
        }
    }
});
export const productSelectors = ProductEntity.getSelectors(state => state.Product);
export default ProductSlice.reducer;