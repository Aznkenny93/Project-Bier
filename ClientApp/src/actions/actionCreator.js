import {
	DELETE_PRODUCT_CART,
	ADD_PRODUCT_CART,
	DECREMENT_PRODUCT_CART,
	CLEAR_CART,
	ADD_PRODUCT_FAVORITES,
	DELETE_PRODUCT_FAVORITES,
	LOGIN,
	LOGOUT,
	ADD_GUEST,
	DELETE_GUEST,
	ADD_DISCOUNT,
	DELETE_DISCOUNT, 
	CHANGE_NAME
} from './actionsTypes';

export const clearCart = () => ({
	type: CLEAR_CART,
});

export const addCartItem = (id, name, price, url) => ({
	type: ADD_PRODUCT_CART,
	id,
	name,
	price,
	url,
});

export const deleteCartItem = (id, count, price) => ({
	type: DELETE_PRODUCT_CART,
	id,
	count,
	price,
});

export const decrementCartItem = (id, price) => ({
	type: DECREMENT_PRODUCT_CART,
	id,
	price,
});

export const loginUser = token => ({
	type: LOGIN,
	token,
});

export const addGuestToStorage = guestInfo => ({
	type: ADD_GUEST,
	guestInfo,
});

export const deleteGuest = () => ({ type: DELETE_GUEST });

export const logoutUser = () => ({ type: LOGOUT });

export const addFavoritesItem = (id, name, price, url) => ({
	type: ADD_PRODUCT_FAVORITES,
	id,
	name,
	price,
	url,
});

export const changeName = name => ({
	type: CHANGE_NAME,
	name
});

export const deleteFavoritesItem = id => ({
	type: DELETE_PRODUCT_FAVORITES,
	id,
});

export const addDiscount = code => ({
	type: ADD_DISCOUNT,
	code,
});

export const deleteDiscount = () => ({
	type: DELETE_DISCOUNT,
});