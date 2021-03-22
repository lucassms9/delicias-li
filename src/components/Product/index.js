import React from 'react';
import { Card,Button } from 'antd';
import Options from './Options'

import './style.css';

const Product = ({product, chooseFlavor, buyItem}) => {
  return (
    <div className="product-item">
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src={product.image} />}
      >
        <div className="body-card">
        <div>
          {product.name}
        </div>
        <div>
        {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </div>
        <div style={{marginTop:'10px'}}>

        {product.flavors.map(sab => 
          <Options chooseFlavor={chooseFlavor} item={sab} prodId={product.id} />
        )} 
        </div>
        <div style={{marginTop:'10px'}}>
          <Button style={{height: '47px', lineHeight:'19px', fontSize:'25px', padding:'4px 24px'}} shape="round" type="primary" onClick={() => buyItem(product.id)}  >COMPRAR</Button>
        </div>
        </div>
      </Card>
    </div>
  );
}

export default Product;