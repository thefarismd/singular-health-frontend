import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const scanApi = createApi({
    reducerPath: 'scan',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5266/' }),
    endpoints: (builder) => ({
        getScans: builder.query({
            query: () => 'api/scans',
        }),
        getNotesByScanId: builder.query({
            query: (scanId) => `api/scans/${scanId}/notes`,
            providesTags: (result, error, scanId) => [{ type: 'Notes', id: scanId }],
        }),
        addNoteToScan: builder.mutation({
            query: ({ scanId, note }) => ({
                url: `api/scans/${scanId}/notes`,
                method: 'POST',
                body: note,
            }),
            invalidatesTags: (result, error,  { scanId } ) => [{ type: 'Notes', id: scanId }],
        }),
    }),
});

export const { useGetScansQuery, useGetNotesByScanIdQuery, useAddNoteToScanMutation } = scanApi;
export { scanApi };
