import React,{useState, useEffect} from 'react';
import { getSingleProduct } from '../functions/product';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = ({ match }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  const { code } = useParams();

  useEffect(() => {
    loadSingleProduct();
  }, []);

  const loadSingleProduct = () => {
    setLoading(true);
    console.log(code)
    getSingleProduct(code, user.token)
    .then((res) => {
      console.log("Single Product",res.data.data.product);
      setProduct(res.data);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    })
  }
  return (
    <div>
      Single Product
    </div>
  )
}

export default SingleProduct
