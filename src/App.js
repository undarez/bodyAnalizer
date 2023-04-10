import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Bmr from './component/calculBmr/CalculeBmr';
import Layout from './component/layout/Layout';
import Header from './component/header/Header';


function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Header/>
        <Bmr/>
      <Routes>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
