import React from 'react'
import classes from "./Carousel.module.css"

const Carousel = ({ settings, widthItem, speed }) => {
    const leftArrow = React.useRef();
    const rightArrow = React.useRef();
    const [totalScrollWidth, setTotalScrollWidth] = React.useState();
    const [scrollRight, setScrollRight] = React.useState(-widthItem);
    const [scrollLeft, setScrollLeft] = React.useState(0);
    const TotalWidth = totalScrollWidth - (widthItem * 2);

    React.useEffect(() => {
        setTotalScrollWidth(settings.current.offsetLeft)
    }, [settings])

    const onScrollRight = (e) => {
        settings.current.offsetParent.style.transition = `transform ${speed}`
        if (TotalWidth > -scrollRight) {
            leftArrow.current.style.opacity = "1"
            leftArrow.current.style.cursor = "pointer"
            settings.current.offsetParent.style.transform = `translate3d(${scrollRight}px, 0, 0)`
            setScrollRight(scrollRight - widthItem)
            setScrollLeft(scrollLeft + widthItem)
        }
        if (TotalWidth - widthItem === -scrollRight) {
            e.currentTarget.style.opacity = "0"
            e.currentTarget.style.cursor = "default"
        } else if (TotalWidth === -scrollRight) {
            e.currentTarget.style.opacity = "0"
            e.currentTarget.style.cursor = "default"
        }
    }

    const onScrollLeft = (e) => {
        rightArrow.current.style.opacity = "1"
        rightArrow.current.style.cursor = "pointer"
        if (scrollLeft !== 0) {
            if (scrollLeft - widthItem === 0) {
                e.currentTarget.style.opacity = "0"
                e.currentTarget.style.cursor = "default"
            }
            settings.current.offsetParent.style.transform = `translate3d(${-scrollLeft + widthItem}px, 0, 0)`
            setScrollLeft(scrollLeft - widthItem)
            setScrollRight(scrollRight + widthItem)
        }
    }

    return (
        <>
            <div ref={leftArrow} className={classes.left_arrow} onClick={(e) => onScrollLeft(e)} >
                <svg className={classes.left_arrow_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13">
                    <title>Назад</title>
                    <g data-name="Слой 2">
                        <g id="icons">
                            <g id="arrows">
                                <polyline className={classes.left_arrow_style} points="1.5 1.5 6.5 6.5 1.5 11.5" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div ref={rightArrow} className={classes.right_arrow} onClick={(e) => onScrollRight(e)} >
                <svg className={classes.right_arrow_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13">
                    <title>Вперед</title>
                    <g data-name="Слой 2">
                        <g id="icons">
                            <g id="arrows">
                                <polyline className={classes.right_arrow_style} points="1.5 1.5 6.5 6.5 1.5 11.5" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </>
    )
}

export default Carousel