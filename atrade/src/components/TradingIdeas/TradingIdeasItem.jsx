import React, {useEffect} from 'react';
import classes from "../TradingIdeas/TradingIdeasItem.module.css";
import EUR from "../../img/base/currency/svg/EUR/eur.svg";
import IdeaItemChart from '../TradingIdeas/IdeaItemChart';
import Modal from "../UI/Modal/Modal";
import Login from "../../pages/Login";
import {Link} from "react-router-dom";

const TradingIdeasItem = React.forwardRef(({ items }, ref) => {
    const [visibleModal, setVisibleModal] = React.useState(false)
    const [currItem, setCurrItem] = React.useState({})
    let currLang = localStorage.getItem("lang");
    const [lang, setLang] = React.useState(currLang)
    const getItem = async (item) => {
        setVisibleModal(true);
        setCurrItem(item)
        document.body.classList.add('modal');
        document.getElementById("html").classList.add('modal');
        document.getElementById("header").classList.add('modal');
        document.getElementById("header").style.top = window.pageYOffset + "px";
        document.getElementById("main_page").classList.add('modal');
    }

    useEffect(() => {
        setLang(localStorage.getItem("lang"))
        let href = window.location.search.split('=')[0];
        let id = window.location.search.match(new RegExp( '=([^&=]+)'));
        console.log(id)
        if (href === "?id" && href[0] != "" && href[1] != null && id != null && href[1] != "" && id[1] != null && id[1] != '' && Number(id[1])) {
            let item = {id: `${id[1]}`}
            getItem(item)
        }
    }, [items, lang])

    return (
        <>
            <div className={classes.ideas_carousel} >
                {items.map(item =>
                    <Link to={"/ideas/view?id=" + item.id} ref={ref} key={item.id} className={classes.ideas_item} onClick={() => getItem(item)} >
                        <div className={classes.ideas_item_inner} >
                            {/* Просмтрено */}
                            {/* Активный */}
                            <div className={classes.ideas_item_upper}>
                                <div className={classes.ideas_item_bg} style={{ backgroundImage: `url(${EUR}` }}></div>
                                <div className={classes.ideas_item_name}>{item.name}</div>
                                <div className=
                                         {item.type_id === "1"
                                             ?
                                             [classes.ideas_item_type, classes.buy].join(' ')
                                             :
                                             [classes.ideas_item_type, classes.sell].join(' ')
                                         }
                                >{lang === "Rus" ? item.type_rus : item.type_eng}</div>
                            </div>
                            <div className={classes.ideas_item_chart}>
                                <IdeaItemChart svg_path={item.svg_path} id={item.id} type_id={item.type_id} />
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal} currItem={currItem}>

            </Modal>
        </>
    )
})

export default TradingIdeasItem