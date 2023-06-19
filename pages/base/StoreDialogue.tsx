import React from 'react'

const mockData = [
    {
        mainCategory: 'Category 1',
        subCategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
    },
    {
        mainCategory: 'Category 2',
        subCategories: ['Subcategory 4', 'Subcategory 5', 'Subcategory 6'],
    },
    {
        mainCategory: 'Category 3',
        subCategories: ['Subcategory 7', 'Subcategory 8', 'Subcategory 9'],
    },
    {
        mainCategory: 'Category 4',
        subCategories: ['Subcategory 10', 'Subcategory 11', 'Subcategory 12'],
    },
    {
        mainCategory: 'Category 5',
        subCategories: ['Subcategory 13', 'Subcategory 14', 'Subcategory 15'],
    },
    {
        mainCategory: 'Category 6',
        subCategories: ['Subcategory 16', 'Subcategory 17', 'Subcategory 18'],
    },
];

export default function StoreDialogue() {

    const numColumns = 3; // Number of columns to display

    // Split main categories into arrays based on the number of columns
    const mainCategoriesChunks = [];
    for (let i = 0; i < mockData.length; i += numColumns) {
        mainCategoriesChunks.push(mockData.slice(i, i + numColumns));
    }



    return (
        <div className="container">
            {mainCategoriesChunks.map((chunk, index) => (
                <div key={index} className="column">
                    {chunk.map(({ mainCategory, subCategories }) => (
                        <div key={mainCategory} className="category">
                            <h2>{mainCategory}</h2>
                            <ul>
                                {subCategories.map((subCategory) => (
                                    <li key={subCategory}>{subCategory}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}

            <style jsx>{`
          .container {
            display: flex;
            flex-wrap: wrap;
            max-height: auto;
            overflow-y: auto;
          }
  
          .column {
            flex: 1 1 auto;
            margin: 5rem;
          }
  
          .category {
            background-color: #f2f2f2;
            padding: 1rem;
            width:100%;
          }
  
          h2 {
            font-size: 1.2rem;
          }
  
          ul {
            margin-bottom: 1rem;
            padding-left: 0;
          }
  
          li {
            font-size: 1rem;
            list-style-type: none;
          }
        `}</style>
        </div>
    )
}
