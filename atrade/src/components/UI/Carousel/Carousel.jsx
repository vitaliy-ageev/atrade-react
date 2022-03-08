import React from 'react'
import classes from "./Carousel.module.css"
import LeftArrowCarousel from "../Icons/Arrows/LeftArrowCarousel/LeftArrowCarousel";
import RightArrowCarousel from "../Icons/Arrows/RightArrowCarousel/RightArrowCarousel";

const Carousel = React.forwardRef(({ settings, widthItem, speed, children, ...props }, ref) => {
    const leftArrow = React.useRef();
    const rightArrow = React.useRef();
    const [scrollRight, setScrollRight] = React.useState(-widthItem);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    return (
        <>
            <LeftArrowCarousel ref={leftArrow}
                               rightArrow={rightArrow}
                               settings={settings}
                               scrollRight={scrollRight}
                               setScrollRight={setScrollRight}
                               scrollLeft={scrollLeft}
                               setScrollLeft={setScrollLeft}
                               widthItem={widthItem}
            />
            {children}
            <RightArrowCarousel ref={rightArrow}
                                leftArrow={leftArrow}
                                settings={settings}
                                scrollRight={scrollRight}
                                setScrollRight={setScrollRight}
                                scrollLeft={scrollLeft}
                                setScrollLeft={setScrollLeft}
                                widthItem={widthItem}
                                speed={speed}
            />
        </>
    )
})

export default Carousel