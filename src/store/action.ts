import axios from 'axios';
import {
    getProductCart,
    addProductCart,
    updateQuantityProductCart,
    removeQuantityProductCart,
    deleteProductCart,
} from './reducer';
import { Dispatch, ProductObject } from '../utils/type';

const url = 'http://localhost:3210';
const apiUrl = `${url}/cart`;

export const getProductsCartAsync = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await axios({
            method: 'get',
            url: `${apiUrl}`,
            withCredentials: false,
        });
        dispatch(getProductCart(data));
        if (data.items.length > 0) dispatch(getProductCart(data));
    } catch (error) {
        let message;

        if (axios.isAxiosError(error) && error.response) {
            message = error.response.data.error;
        } else message = String(error);
        console.log('Error: ', message);
    }
};

export const addProductsCartAsync =
    (data: ProductObject) => async (dispatch: Dispatch) => {
        try {
            const { data: dataPost } = await axios({
                method: 'post',
                url: `${apiUrl}/${data._id}`,
                data,
                withCredentials: false,
            });

            dispatch(addProductCart(dataPost));
        } catch (error) {
            let message;

            if (axios.isAxiosError(error) && error.response) {
                message = error.response.data.error;
            } else message = String(error);
            console.log('Error: ', message);
        }
    };

export const updateQuantityProductCartAsync =
    (id: number, quantity: number) => async (dispatch: Dispatch) => {
        try {
            const { data } = await axios({
                method: 'put',
                url: `${apiUrl}/${id}`,
                withCredentials: true,
                params: {
                    quantity: quantity + 1,
                },
            });
            dispatch(updateQuantityProductCart(data));
        } catch (error) {
            let message;

            if (axios.isAxiosError(error) && error.response) {
                message = error.response.data.error;
            } else message = String(error);
            console.log('Error: ', message);
        }
    };

export const removeQuantityProductCartAsync =
    (id: number, quantity: number) => async (dispatch: Dispatch) => {
        try {
            const { data } = await axios({
                method: 'put',
                url: `${apiUrl}/${id}`,
                withCredentials: true,
                params: {
                    quantity: quantity > 1 ? quantity - 1 : 1,
                },
            });

            dispatch(removeQuantityProductCart(data));
        } catch (error) {
            let message;

            if (axios.isAxiosError(error) && error.response) {
                message = error.response.data.error;
            } else message = String(error);
            console.log('Error: ', message);
        }
    };

export const deleteProductCartAsync =
    (id: number) => async (dispatch: Dispatch) => {
        try {
            const { data } = await axios({
                method: 'delete',
                url: `${apiUrl}/${id}`,
                withCredentials: true,
            });
            dispatch(deleteProductCart(data));
        } catch (error) {
            let message;

            if (axios.isAxiosError(error) && error.response) {
                message = error.response.data.error;
            } else message = String(error);
            console.log('Error: ', message);
        }
    };
