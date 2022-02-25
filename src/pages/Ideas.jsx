import React, { useContext, useState, useEffect } from 'react'
import Header from "../widgets/Header/Header";
import Main from "../widgets/Main/Main";
import Footer from "../widgets/Footer/Footer";
import MainTitle from "../components/UI/MainTitle/MainTitle";
import SubNavigation from "../components/UI/SubNavigation/SubNavigation";
import TradingIdeas from "../components/TradingIdeas/TradingIdeas";
import { LangContext } from '../context/LangContext';
import { TITLE } from "../utils/title";
import { SUBNAVIGATION } from "../utils/subnavigation";

const Ideas = () => {
    const [title, setTitle] = useState('');
    const [navigations, setNavigations] = useState([]);
    const lang = localStorage.getItem('lang');
    useEffect(() => {
        setTitle(TITLE("ideas", lang))
        setNavigations(SUBNAVIGATION("ideas", lang))
    }, [lang])

    const { visible, setVisible, onClickHeader, onClickMain, onClickFooter } = useContext(LangContext);

    return (
        <div className="App">
            <Header visible={visible} setVisible={setVisible} onClick={onClickHeader} />
            <Main onClick={onClickMain}>
                <MainTitle title={title.title}>
                    <SubNavigation items={navigations} />
                </MainTitle>
                <TradingIdeas />
            </Main>
            <Footer onClick={onClickFooter} />
        </div>
    )
}

export default Ideas;