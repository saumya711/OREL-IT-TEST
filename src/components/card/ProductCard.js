import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ProductImage from '../../assests/product.webp'

const { Meta } = Card;

const ProductCard = ({product}) => {
  const [tooltip, setTooltip] = useState('Click to add');

  const { name, shortDescription, price, price_currency, code } = product;
  
  return (
    <>
      <Card
        cover={
          <img 
            //src={images && images.length ? images[0].url : ""}
            src={ProductImage}
            style={{ height: '200px', objectFit: "cover"}}
            className='p-1'
          />
        }

        actions={[ 
          <Link to={`/product/${code}`}>
              <EyeOutlined className='text-primary' /> <br /> View Product
          </Link>, 
          <Tooltip title={tooltip}>
            <a style={{ pointerEvents: 'auto' }}>
              <ShoppingCartOutlined className='text-danger' /> <br />
              {"Add to Cart"}
            </a>
          </Tooltip>
          
        ]}
      >
        <Meta 
          title={`${name} - ${price} ${price_currency}`} 
          Description={`${shortDescription && shortDescription.substring(0, 40)}...`} 
        />
      </Card>
    </>
  )
}

export default ProductCard

