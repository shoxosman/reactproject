import React from 'react'
import { useGetCategoriesQuery } from "../features/TheApiSlice";
import { Link } from "react-router-dom";

export default function CategoriesComp() {

    const { data = [], isLoading } = useGetCategoriesQuery();

    return data.map((categories) => {
      return (
        <div>
          <Link to={`/products/filter/${categories.name}`}>
            <div className="single-category">
  
              <h5 className="category-comp-titles">
                {categories.name}
              </h5>
  
            </div>
          </Link>
        </div>
      );
    });
  }
