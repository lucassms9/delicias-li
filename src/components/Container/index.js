import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import { Container } from './styles';

const Container = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Container;
