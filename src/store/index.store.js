import { configureStore } from "@reduxjs/toolkit";
import { scanApi, useAddNoteToScanMutation, useGetNotesByScanIdQuery, useGetScansQuery } from "./scanApi";
import noteReducer from './noteSlice';
import { setTitle, setContent, resetForm } from './noteSlice';

const store = configureStore({
    reducer: {
        [scanApi.reducerPath]: scanApi.reducer,
        note: noteReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(scanApi.middleware),
});

export { store };
export { useAddNoteToScanMutation, useGetNotesByScanIdQuery, useGetScansQuery };
export { setTitle, setContent, resetForm };