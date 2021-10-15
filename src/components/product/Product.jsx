import React from 'react';
import './product.css';

import axios from 'axios';

const Product = () => {
   // const { data } = await axios.get(`https://random.imagecdn.app/500/${id}`);
   return (
      <div className="p">
         <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
         </div>
      </div>
   );
};

export default Product;
