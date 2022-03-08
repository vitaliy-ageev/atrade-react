import React from 'react';
import classes from "./RightArrowCarousel.module.css";

const RightArrowCarousel = React.forwardRef(({settings, leftArrow, scrollRight, setScrollRight, scrollLeft, setScrollLeft, widthItem, speed}, ref) => {
    const [totalScrollWidth, setTotalScrollWidth] = React.useState();
    const totalWidth = totalScrollWidth - (widthItem * 2);

    React.useEffect(() => {
        setTotalScrollWidth(settings.current.offsetLeft)
    }, [settings])

    const onScrollRight = (e) => {
        settings.current.offsetParent.style.transition = `transform ${speed}`
        if (totalWidth > -scrollRight && totalScrollWidth > 1180) {
            leftArrow.current.style.opacity = "1"
            leftArrow.current.style.cursor = "pointer"
            leftArrow.current.style.zIndex = "1000"
            settings.current.offsetParent.style.transform = `translate3d(${scrollRight}px, 0, 0)`
            setScrollRight(scrollRight - widthItem)
            setScrollLeft(scrollLeft + widthItem)
        }
        if (totalWidth - widthItem === -scrollRight) {
            e.currentTarget.style.opacity = "0"
            e.currentTarget.style.cursor = "default"
            e.currentTarget.style.zIndex = "-1"
        } else if (totalWidth === -scrollRight) {
            e.currentTarget.style.opacity = "0"
            e.currentTarget.style.cursor = "default"
            e.currentTarget.style.zIndex = "-1"
        }
    }

    if (totalScrollWidth < 1180) {
        ref.current.style.opacity = "0"
        ref.current.style.cursor = "default"
        ref.current.style.zIndex = "-1"
    }

    return (
        <div ref={ref} className={classes.right_arrow} onClick={(e) => onScrollRight(e)} >
            <svg className={classes.right_arrow_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13">
                <title>Вправо</title>
                <g data-name="Right Arrow">
                    <g id="icons">
                        <g id="right-arrow">
                            <polyline className={classes.right_arrow_style} points="1.5 1.5 6.5 6.5 1.5 11.5" />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
});

export default RightArrowCarousel;