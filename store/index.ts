import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import profileSlice from './slice/profileSlice';
// Combine reducers
const rootReducer = combineReducers({
    profile: profileSlice,
});

const resettableReducer = (state: any, action: AnyAction) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return rootReducer(state, action);
};

// Create store
export const store = configureStore({
    reducer: resettableReducer,
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for using typed selectors and dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
