import React, {useState} from 'react';
import classes from './SocialNetworks.module.css'
import SocialNetworksItem from "./SocialNetworksItem";

const SocialNetworks = () => {
    const [items, setItems] = useState([
        {id: "1", name: "vkontakte", icon: "Vk", link: "/"},
        {id: "2", name: "telegram", icon: "Telegram", link: "/"},
        {id: "3", name: "instagram", icon: "Instagram", link: "/"},
    ]);

    return (
        <div className={classes.social_nw}>
            <div className={classes.social_nw_inner}>
                <SocialNetworksItem items={items} setItems={setItems} />
            </div>
        </div>
    );
};

export default SocialNetworks;