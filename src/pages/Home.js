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
  const [ page, setPage ] = useState(1);
  
  const user = useSelector((state) => ({ ...state}));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    getAllProducts(20, user.token)
    .then((res) => {
      console.log("All Products",res.data.data.products);
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
              <LoadingCard count={3}/>
              ) : (
              <div className='row'>
                {allproducts.map((product) => (
                <div key={product._id} className='col-md-4 pb-3'>
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
