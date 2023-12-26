import React,{useState, useEffect} from 'react';
import { getSingleProduct } from '../functions/product';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Carousel } from 'antd';
import ProductListItems from '../components/card/ProductListItems';
import ProductImage from '../assests/product.webp'
import Header from '../components/Header';

const SingleProduct = ({ match }) => {
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { auth } = useSelector((state) => ({ ...state }));
  const { code } = useParams();

  useEffect(() => {
    loadSingleProduct();
  }, []);

  const loadSingleProduct = () => {
    setLoading(true);
    getSingleProduct(code, auth.token)
    .then((res) => {
      console.log("Single Product",res.data.data.product);
      setSingleProduct(res.data.data.product);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    })
  }
  return (
    <div className='container-fluid'>
      <Header />
      <div className='row pt-4'>
        <div className='col-md-7'>
          {singleProduct.images && singleProduct.images.length ? (
            <Carousel showArrows={true} autoPlay infiniteLoop>
              {/* {singleProduct.images && singleProduct.images.map((image) => <img src={image.url} key={image.public_id}/>)} */}
              <img src={ProductImage}/>
            </Carousel>
          ) : (
            <Card cover={<img src="" className="mb-3 card-image" />}></Card>
          )}
        </div>

        <div className='col-md-5'>
          <h1 className="bg-danger p-3 text-white">{singleProduct.name}</h1>
          <h6 className="text-center p-3">{singleProduct.shortDescription}</h6>
          <Card
            actions={[
              <a>
                <ShoppingCartOutlined className='text-success' /> <br /> Add to Cart
              </a>,
              <a>
                <HeartOutlined  className='text-info'/> <br /> Add to Wishlist
              </a>,
            ]}
          >
            <ProductListItems singleProduct={singleProduct} />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
