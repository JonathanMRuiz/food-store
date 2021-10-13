
import './App.css';
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';
import Milangas from './Components/Milangas/Milangas';
import Products from './Components/Products/Products';
import { productData, productDataTwo } from './data'

import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Milangas/>
      <Products heading='Escoge tu favorita' data={productData}/>
      <Feature/>
      <Products heading='Nuestros postres' data={productDataTwo}/>
      <Footer/>
    </div>
  );
}

export default App;
