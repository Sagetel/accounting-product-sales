import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesHandler, getProductsHandler, getSalesHandler, getSuppliersHandler } from './redux/actions';
import Layout from './components/Layout';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesHandler());
    dispatch(getProductsHandler());
    dispatch(getSalesHandler());
    dispatch(getSuppliersHandler());
  }, []);

  return (
    <div className="App" >
      <Layout />
    </div>
  );
}

export default App;