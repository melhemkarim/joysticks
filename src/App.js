import React from 'react';

import { Header,About,Games,Offers} from './container';
import { Footer} from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';



const App = () => (
  <div>
    <Header />
    <About />
    <Games />
    <Offers />
    <Footer />


  </div>
  
);

export default App;
