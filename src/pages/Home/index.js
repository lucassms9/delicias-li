
import React, { useState } from 'react'
import { message, Row, Col } from 'antd'

import Container from '../../components/Container'
import Carousel from '../../components/Carousel'
import Product from '../../components/Product'

import products from './products';
import './style.css';

const Home = () => {
    const [produtcs, setProdutcs] = useState(products);

  const buyItem = (id) => {
    const find = produtcs.find(prod => prod.id === id)

    const findFlavor = find.flavors.find(fla => fla.active)
    if(!findFlavor){
       message.error('Escolha pelo menos 1 sabor para continuar');
       return
    }
    const text = `Olá, gostaria de comprar o *${find.name}* no sabor de *${findFlavor.flavor}* no valor de *${find.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}*`;


    window.open(`https://api.whatsapp.com/send/?phone=5515997623307&text=${text}&app_absent=0`, '_blank');

    
  }
  const chooseFlavor = (id, flavor) => {

    const find = produtcs.find(prod => prod.id === id)
    let newPrice = find.price;

    find.flavors.forEach(fla => {
      if(fla.flavor === flavor){
        fla.active = true
        newPrice = fla.price;
      }else{
        fla.active = false
      }
    });

    find.price = newPrice;
    
    const handleItems = produtcs.filter(prod => prod.id !== id);

    const items = [...handleItems, find];
 
    items.sort((a, b) => a.id - b.id);
    setProdutcs(items)
  }
    return (
        <Container>
            <div>
               <div className="container-carousel">
                <Carousel />
               </div>
                <div className="contrainer-products">
                    <Row className="content-products">
                        {produtcs.map((prod) => {
                            return (
                                <Col className="cl-prod" gutter={{ xs: 32, sm: 8, md: 8, lg: 8 }} >
                                    <Product product={prod} chooseFlavor={chooseFlavor} buyItem={buyItem} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default Home
