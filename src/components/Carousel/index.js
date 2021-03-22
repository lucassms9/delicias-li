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
            <div
                onClick={() => fn()}
                onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
            >
                <img
                    src="http://sweet-dessert.axiomthemes.com/wp-content/uploads/revslider/slider-1/slide4.jpg"
                    alt="title or description"
                    style={{
                        display: 'block',
                        width: '100%',
                    }}
                />
            </div>
            <img
                style={contentStyle}
                src="http://sweet-dessert.axiomthemes.com/wp-content/uploads/revslider/slider-1/slide4.jpg"
                alt="Doce 1"
            />
            <img
                style={contentStyle}
                src="http://sweet-dessert.axiomthemes.com/wp-content/uploads/revslider/slider-1/slide2-1.jpg"
                alt="Doce 2"
            />
            <img
                style={contentStyle}
                src="http://sweet-dessert.axiomthemes.com/wp-content/uploads/revslider/slider-1/slider-1.jpg"
                alt="Doce 3"
            />
        </Coverflow>
    )
}

export default CarouselComp
