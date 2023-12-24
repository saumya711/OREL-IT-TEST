import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ProductCard = ({product}) => {
  const [tooltip, setTooltip] = useState('Click to add');

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  // destructure
  const { name, shortDescription, images, price, code } = product;
  
  return (
    <>
      <Card
        cover={
          <img 
            src={images && images.length ? images[0].url : ""}
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
          title={`${name} - $${price}`} 
          Description={`${shortDescription && shortDescription.substring(0, 40)}...`} 
        />
      </Card>
    </>
  )
}

export default ProductCard

