import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    content: '',
};

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload;
        },
        setContent(state, action) {
            state.content = action.payload;
        },
        resetForm(state) {
            state.title = '';
            state.content = '';
        },
    },
});

export const { setTitle, setContent, resetForm } = noteSlice.actions;
export default noteSlice.reducer;
