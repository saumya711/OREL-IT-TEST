import React, {useState, useEffect} from 'react';
import Sidenav from '../components/Sidenav';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllProducts } from '../functions/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const user = useSelector((state) => ({ ...state}));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts(10, user.token);
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading products:', error);
      setLoading(false);
    }
  }
  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'>
            <Sidenav />
          </div>
          
          <div className='col-md-10'>
            <h4>Home Page</h4>
            {JSON.stringify(products)}
          </div>
        </div>
    </div>
  )
}

export default Home
