import './App.scss';
import { About, Work, Skills, Testimonials, Footer, Header } from "./containers/index";
import { Navbar } from './components/index';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;