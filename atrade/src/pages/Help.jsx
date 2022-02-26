import React, { useContext, useState, useEffect } from 'react'
import Header from "../widgets/Header/Header";
import Main from "../widgets/Main/Main";
import Footer from "../widgets/Footer/Footer";
import MainTitle from "../components/UI/MainTitle/MainTitle";
import { LangContext } from '../context/LangContext';
import { TITLE } from "../utils/title";


const Help = () => {
    const { visible, setVisible, onClickHeader, onClickMain, onClickFooter } = useContext(LangContext);
    const [title, setTitle] = useState('');
    const lang = localStorage.getItem('lang');
    useEffect(() => {
        setTitle(TITLE("help", lang))
    }, [lang])

    return (
        <div className="App">
            <Header visible={visible} setVisible={setVisible} onClick={onClickHeader} />
            <Main onClick={onClickMain}>
                <MainTitle title={title.title}>
                </MainTitle>
            </Main>
            <Footer onClick={onClickFooter} />
        </div>
    )
}

export default Help