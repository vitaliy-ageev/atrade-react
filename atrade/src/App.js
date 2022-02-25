import React, { useEffect, useState } from 'react';
import './styles/base.css';
import './styles/fonts.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter/AppRouter';
import { LangContext } from './context/LangContext';
import { NAVIGATION } from "./utils/navigation";
import { FOORER_INFROMATION } from "./utils/footer_infromation";
import { MAILING } from "./utils/mailing";

function App() {
    const [visible, setVisible] = useState(false);
    const [onChangeLang, setOnChangeLang] = useState(true);
    window.addEventListener('scroll', () => setVisible(false));

    const [items, setItems] = useState([]);
    const [companyInformation, setCompanyInformation] = useState([]);
    const [mailing, setMailing] = useState([]);
    const lang = localStorage.getItem('lang');
    useEffect(() => {
        setItems(NAVIGATION(lang))
        setCompanyInformation(FOORER_INFROMATION(lang))
        setMailing(MAILING(lang))
    }, [lang])

    const onClickHeader = () => {
        if (visible) {
            setVisible(false);
        }
    }

    const onClickMain = () => {
        if (visible) {
          setVisible(false);
        }
      }

    const onClickFooter = () => {
        if (visible) {
            setVisible(false);
        }
    }

    return (
        <LangContext.Provider value={{ visible, setVisible, onClickHeader, onClickMain, onClickFooter, items, companyInformation, mailing, onChangeLang, setOnChangeLang }}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </LangContext.Provider>
    );
}

export default App;
