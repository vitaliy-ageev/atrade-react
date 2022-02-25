import React from 'react';
import Telegram from "../UI/Icons/telegram/telegram";
import Instagram from "../UI/Icons/instagram/instagram";
import Vk from "../UI/Icons/vk/vk";

const Icons = ({icon}) => {
    switch (icon) {
        case "Vk":
            return <Vk />
        case "Telegram":
            return <Telegram />
        case "Instagram":
            return <Instagram />
    }

    return (
        <></>
    );
};

export default Icons;