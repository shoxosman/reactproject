import React from 'react'
import { useGetCategoriesQuery } from "../features/TheApiSlice";
import { Link } from "react-router-dom";

export default function CategoriesComp() {

    const { data = [], isLoading } = useGetCategoriesQuery();

    if (isLoading) return <h3>loading...</h3>;

    return data.map((categories) => {
      return (
        <div>
          <Link to={`/products/filter/${categories.name}`}>
            <div className="single-category container">
  
              <h6 className="text-dark">
                {categories.name}
              </h6>
  
            </div>
          </Link>
        </div>
      );
    });
  }
