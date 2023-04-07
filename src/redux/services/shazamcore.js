import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '35bfd2563bmsh4f98b310c4a8ee3p17a0d0jsn9c2f85b1e572',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi= createApi({
        reducerPath:'shazamCoreApi',
        baseQuery:fetchBaseQuery({
            baseUrl:'https://shazam.p.rapidapi.com',
            prepareHeaders:(headers)=>{
                headers.set('X-RapidAPI-Key', '35bfd2563bmsh4f98b310c4a8ee3p17a0d0jsn9c2f85b1e572')
                return headers;
            },

        }),
        endpoints:(builders)=>({
            getTopCharts:builders.query({query:()=> '/charts/track'}),
        }),

    });

    export const{
        useGetTopChartsQuery,
    }=shazamCoreApi;