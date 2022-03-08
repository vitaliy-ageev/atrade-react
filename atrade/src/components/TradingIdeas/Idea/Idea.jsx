import React, {useEffect} from 'react';
import classes from "./Idea.module.css";
import Chart from "../../UI/Chart/Chart";
import EUR from "../../../img/base/currency/svg/EUR/eur.svg";
import {Link} from "react-router-dom";
import Content from "./Content/Content";

const Idea = React.forwardRef(({ ideas }, ref) => {
    const [visibleModal, setVisibleModal] = React.useState(false)
    const [currentIdea, setCurrentIdea] = React.useState({})
    let currLang = localStorage.getItem("lang");
    const [lang, setLang] = React.useState(currLang);

    let getIdea = async (idea) => {
        setVisibleModal(true);
        setCurrentIdea(idea)
    }

    useEffect(() => {
        setLang(localStorage.getItem("lang"))
        let href = window.location.search.split('=')[0];
        let id = window.location.search.match(new RegExp( '=([^&=]+)'));
        if (href === "?id" && href[0] !== "" && href[1] !== null && id !== null && href[1] !== "" && id[1] !== null && id[1] !== '' && Number(id[1])) {
            let idea = {id: `${id[1]}`}
            getIdea(idea)
        }
    }, [ideas, lang])

    return (
        <>
            <div className={classes.idea_carousel}>
                {ideas.map(idea =>
                    <Link to={"/ideas/?id=" + idea.id} ref={ref} key={idea.id} className={classes.idea} onClick={() => getIdea(idea)} >
                        <div className={classes.idea_inner} >
                            {/* Просмтрено */}
                            {/* Активный */}
                            <div className={classes.idea_upper}>
                                <div className={classes.idea_bg} style={{ backgroundImage: `url(${EUR}` }}></div>
                                <div className={classes.idea_name}>{idea.name}</div>
                                <div className=
                                         {idea.type_id === "1"
                                             ?
                                             [classes.idea_type, classes.buy].join(' ')
                                             :
                                             [classes.idea_type, classes.sell].join(' ')
                                         }
                                >{lang === "Rus" ? idea.type_rus : !lang ? idea.type_rus : idea.type_eng}</div>
                            </div>
                            {/*Chart*/}
                            <div className={classes.idea_chart}>
                                <Chart svg_path={idea.svg_path} id={idea.id} type={idea.type} />
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            {/*Content*/}
            <Content visibleModal={visibleModal} setVisibleModal={setVisibleModal} currentIdea={currentIdea} />
        </>
    )
})

export default Idea