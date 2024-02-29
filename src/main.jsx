import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Form from './components/form.jsx';
import Footer from './components/footer.jsx'
import SimpsonsCharacter from './components/simpsons.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Form />
    <Footer />
    <SimpsonsCharacter />
  </React.StrictMode>
);
