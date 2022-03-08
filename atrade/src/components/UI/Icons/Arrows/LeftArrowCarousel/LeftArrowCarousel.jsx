import React from 'react';
import classes from "./LeftArrowCarousel.module.css";

const LeftArrowCarousel = React.forwardRef(({settings, rightArrow, scrollLeft, setScrollLeft, scrollRight, setScrollRight, widthItem}, ref) => {
    const onScrollLeft = (e) => {
        rightArrow.current.style.opacity = "1"
        rightArrow.current.style.cursor = "pointer"
        rightArrow.current.style.zIndex = "1000"
        if (scrollLeft !== 0) {
            if (scrollLeft - widthItem === 0) {
                e.currentTarget.style.opacity = "0"
                e.currentTarget.style.cursor = "default"
                e.currentTarget.style.zIndex = "-1"
            }
            settings.current.offsetParent.style.transform = `translate3d(${-scrollLeft + widthItem}px, 0, 0)`
            setScrollLeft(scrollLeft - widthItem)
            setScrollRight(scrollRight + widthItem)
        }
    }

    return (
        <div ref={ref} className={classes.left_arrow} onClick={(e) => onScrollLeft(e)} >
            <svg className={classes.left_arrow_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13">
                <title>Влево</title>
                <g data-name="Left Arrow">
                    <g id="icons">
                        <g id="left-arrow">
                            <polyline className={classes.left_arrow_style} points="1.5 1.5 6.5 6.5 1.5 11.5" />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
});

export default LeftArrowCarousel;