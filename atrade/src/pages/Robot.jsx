import React, { useContext, useEffect, useState } from 'react';
import Header from "../widgets/Header/Header";
import Main from "../widgets/Main/Main";
import Footer from "../widgets/Footer/Footer";
import MainTitle from "../components/UI/MainTitle/MainTitle";
import SubNavigation from "../components/UI/SubNavigation/SubNavigation";
import { LangContext } from '../context/LangContext';
import { TITLE } from "../utils/title";
import { SUBNAVIGATION } from "../utils/subnavigation";

const Robot = () => {
    const [title, setTitle] = useState('');
    const [navigations, setNavigations] = useState([]);
    const lang = localStorage.getItem('lang');
    useEffect(() => {
        setTitle(TITLE("advisor", lang))
        setNavigations(SUBNAVIGATION("advisor", lang))
    }, [lang]);

    const { visible, setVisible, onClickHeader, onClickMain, onClickFooter } = useContext(LangContext);

    return (
        <div className="App">
            <Header visible={visible} setVisible={setVisible} onClick={onClickHeader} />
            <Main onClick={onClickMain}>
                <MainTitle title={title.title}>
                    <SubNavigation items={navigations} />
                </MainTitle>
            </Main>
            <Footer onClick={onClickFooter} />
        </div>
    )
}

export default Robot