import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
 
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
   
  }),
 
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => "/products",
      }),
      login: builder.mutation({
             query:({email , password })=>({
               url:`login`,
               method:"post",
               body:{email , password}
             })
      }),
      getProductById: builder.query({
        query: (id) => `products/${id}`,
      }),
      getCategories: builder.query({
        query: () => "/categories",
      }),
      getCategoryByCategory: builder.query({
        query: (category) => `/products?category=${category}`,
      }),
     
    };
  },
});


export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetCategoryByCategoryQuery,
  useLoginMutation
} = productsApiSlice;