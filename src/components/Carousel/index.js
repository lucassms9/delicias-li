import React from 'react'
import Coverflow from 'react-coverflow'

const contentStyle = {
    // width: '100%',
}

// import { Container } from './styles';


const CarouselComp = () => {

  const fn = () => {}
    return (
        <Coverflow
            width="960"
            height="500"
            classes={{ background: 'rgb(233, 23, 23)' }}
            className=""
            displayQuantityOfSide={2}
            infiniteScroll
            navigation={false}
            enableScroll={true}
            clickable={true}
            active={0}
            media={{
                '@media (max-width: 900px)': {
                  width: '100%',
                  height: '250px'
                },
                '@media (min-width: 900px)': {
                  width: '100%',
                  height: '500px'
                }
              }}
        >
            
            <img
                style={contentStyle}
                src="/images/cestinha.jpeg"
                alt="CESTINHA TRUFADA"
            />
            <img
                style={contentStyle}
                src="/images/cones.jpeg"
                alt="CONE TRUFADO"
                tabIndex="0"
            />
            <img
                style={contentStyle}
                src="/images/copo.jpeg"
                alt="COPO DA FELICIDADE"
            />
        </Coverflow>
    );
}

export default CarouselComp
