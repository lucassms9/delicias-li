import React from 'react'
import Coverflow from 'react-coverflow'

const contentStyle = {}

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
            navigation={false}
            enableScroll={true}
            clickable={true}
            active={0}
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
