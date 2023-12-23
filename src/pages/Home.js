import React, {useState, useEffect} from 'react';
import Sidenav from '../components/Sidenav';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../functions/products';
import ProductCard from '../components/card/ProductCard';

const Home = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const user = useSelector((state) => ({ ...state}));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    getAllProducts(1, user.token)
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
            
            <div className='row'>
              {allproducts.map((product) => (
                <div key={product.code} className='col-md-4 pb-3'>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
