import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import selectedPageReducer from './reducers/selectedPageReducer';
import selectedCategoryReducer from './reducers/selectedCategoryReducer';
import selectedFoodReducer from './reducers/selectedFoodReducer';

//PERSIST CONFIG -- SAVE REDUX STORE TO LOCAL STORAGE
const persistConfig = {
    key: 'root',
    storage,
}
//COMBINE REDUCERS
const reducer = combineReducers({
    selectedPage: selectedPageReducer,
    selectedCategory: selectedCategoryReducer,
    selectedFood: selectedFoodReducer
});

//persisting the combined reducers is to avoid losing data sometime when you reload the page
const persisted_reducer = persistReducer(persistConfig, reducer)

//CREATE STORE
let store = configureStore({
    reducer: persisted_reducer,

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
}
);

//CREATE THE STORE PERSISTOR TO SAVE THE STORE IN LOCAL STORAGE
const Persistor = persistStore(store);

export { Persistor };

export default store;