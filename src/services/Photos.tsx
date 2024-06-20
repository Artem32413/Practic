// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { PhotosApi } from './types'

// // Define a service using a base URL and expected endpoints
// export const photoApi = createApi({
//   reducerPath: 'PhotosApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/paintings' }),
//   endpoints: (builder) => ({
//     getPhotoByName: builder.query<PhotosApi, string>({
//       query: (name) => `photo/${name}`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPhotosByNameQuery } = photoApi