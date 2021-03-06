import React from 'react';
import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
   return (
      <div className="pl">
         <div className="pl-texts">
            <h1 className="pl-title">Be Positive & Passion. It's Me! </h1>
            <p className="pl-desc">
               If you can't fly then run, if you can't run then walk, if you
               can't walk then crawl, but whatever you do you have to keep
               moving forward
            </p>
         </div>
         <div className="pl-list">
            {products.map((item) => (
               <Product key={item.id} img={item.img} />
            ))}
         </div>
      </div>
   );
};

export default ProductList;
