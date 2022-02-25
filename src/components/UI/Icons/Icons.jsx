import React from 'react';
import Telegram from "./telegram/telegram";
import Instagram from "./instagram/instagram";
import Vk from "./vk/vk";
import VkBig from "./vk/vkBig";

const Icons = ({icon, setVkStyle, setVkBigStyle, setTgStyle, setInstStyle}) => {
    let vkStyle = {};
    let tgStyle = {};
    let instStyle = {};

    if (setVkStyle) {
        vkStyle = {
            width: '32px',
            height: '32px',
            fill: "#BEBEBE",
            transition: 'all .1s linear',
        }
    }
    if (setVkBigStyle) {
        vkStyle = {
            marginRight: '15px',
        }
    }
    if (setTgStyle) {
        tgStyle = {
            width: '23px',
            height: '23px',
            fill: "#BEBEBE",
            marginRight: '15px',
            marginBottom: '0',
            transition: 'all .1s linear',
        }
    }
    if (setInstStyle) {
        instStyle = {}
    }

    switch (icon) {
        case "Vk":
            return <Vk vkStyle={vkStyle} />
        case "VkBig":
            return <VkBig vkStyle={vkStyle} />
        case "Telegram":
            return <Telegram tgStyle={tgStyle} />
        case "Instagram":
            return <Instagram tgStyle={instStyle} />
    }

    return (
        <></>
    );
};

export default Icons;