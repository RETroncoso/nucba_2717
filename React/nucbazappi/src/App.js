import React from 'react';

import Routes from './routes/Routes';

import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
