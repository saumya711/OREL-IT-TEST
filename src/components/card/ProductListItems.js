import React from 'react';

const ProductListItems = ({singleProduct}) => {
    const { 
        code, 
        discount, 
        discount_price, 
        price, 
        price_currency, 
        product_code, 
        rate, 
        search_url
    } = singleProduct


  return (
    <ul className='list-group'>
      <li className='list-group-item'>
        Code{" "}
          <span className='label label-default lable-pill pull-xs-right'>
            {code}
          </span>
      </li>

      <li className='list-group-item'>
        Product Code{" "}
          <span className='label label-default lable-pill pull-xs-right'>
            {product_code}
          </span>
      </li>

      <li className='list-group-item'>
        Price{" "}
          <span className='label label-default lable-pill pull-xs-right'>
            {price} {price_currency}
          </span>
      </li>

      <li className='list-group-item'>
        Discount{" "}
          <span className='label label-default lable-pill pull-xs-right'>
            {discount}
          </span>
      </li>

      <li className='list-group-item'>
        Discount Price{" "}
          <span className='label label-default lable-pill pull-xs-right'>
            {discount_price}
          </span>
      </li>

      <li className='list-group-item'>
        Rate{" "}
          <span className='label label-default lable-pill pull-xs-right'>
            {rate}
          </span>
      </li>

      <li className='list-group-item'>
        Search URL{" "}
          <span className='label label-default lable-pill pull-xs-right'>
            {search_url}
          </span>
      </li>
    </ul>
  )
}

export default ProductListItems
