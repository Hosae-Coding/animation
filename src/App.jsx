import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';

const App = () => {
   return (
      <div className="App">
         <Intro />
         <About />
         <ProductList />
         <Contact />
      </div>
   );
};

export default App;
