import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import Sidenav from '../components/sidebar/Sidenav';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../functions/product';
import ProductCard from '../components/card/ProductCard';
import { Pagination } from 'antd';
import LoadingCard from '../components/card/LoadingCard';

const Home = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { auth } = useSelector((state) => ({ ...state}));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    getAllProducts(100, auth.token)
    .then((res) => {
      setAllProducts(res.data.data.products);
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
      <div className='row'>
        <div className='col-md-2'>
          <div className='container'>
            <Sidenav />
          </div>
        </div>
        
        <div className='col-md-10'>
          <div className='container'>
            <h4 className='text-center p-3 mb-5 display-4 jumbotron'>
              All Products
            </h4>
            
            <div className='container'>
              {loading ? (
              <LoadingCard count={6}/>
              ) : (
              <div className='row'>
                {allproducts.map((product) => (
                <div key={product.code} className='col-md-4 pb-3'>
                    < ProductCard
                    product={product}
                    />
                </div>
                ))}
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
