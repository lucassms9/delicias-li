import React from 'react';
import {Button} from 'antd'
// import { Container } from './styles';

const Options = ({item, chooseFlavor, prodId}) => {
  return (
     <>
      {item.active ? (
        <Button onClick={() => chooseFlavor(prodId, item.flavor)} type="primary" style={{height: '35px', lineHeight:'19px', fontSize:'25px', padding:'4px 24px', marginRight:5}}>{item.flavor}</Button>
      ) : (
        <Button onClick={() => chooseFlavor(prodId, item.flavor)} type="primary" style={{height: '35px', lineHeight:'19px', fontSize:'25px', padding:'4px 24px', marginRight:5,background:'rgb(160 160 160)'}}>{item.flavor}</Button>
      )}
     </>
  )
}

export default Options;