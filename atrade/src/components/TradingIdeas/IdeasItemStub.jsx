import React from 'react'
import classes from "./IdeasItemStub.module.css"

const IdeasItemStub = ({items}) => {
    return (
        <div className={classes.ideas_item_stub_container}>
            {items.map(item =>
                <div key={item.id} className={classes.ideas_item_stub}>
                <div className={classes.ideas_item_stub_inner}>
                    <div className={classes.ideas_item_stub_upper}>
                        <div className={classes.ideas_item_stub_bg}></div>
                        <div className={classes.ideas_item_stub_name}></div>
                        <div className={classes.ideas_item_stub_order}></div>
                    </div>
                    <div className={classes.ideas_item_stub_chart}>
                        <svg className={classes.ideas_item_stub_chart_svg} viewBox="0 0 338 150">
                            <polyline points="0,135 28,125 56,120 84,108 113,102 141,53 169,44 197,71 225,65 253,96 282,44 310,65 338,17" fill="none" stroke="#F2F2F2" strokeWidth="1.5" strokeLinejoin="round"></polyline>
                            <defs>
                                <linearGradient id={item.id + "ISTB"} x1="100%" y1="100%" x2="100%" y2="100%"><stop offset="100%" style={{stopColor: "#F2F2F2", stopOacity: "0.99",}}></stop><stop offset="100%" style={{stopColor: "#F2F2F2", stopOpacity: "1",}}></stop></linearGradient>
                            </defs>
                            <path d="M 0,150 L 0,135 L 28,125 L 56,120 L 84,108 L 113,102 L 141,53 L 169,44 L 197,71 L 225,65 L 253,96 L 282,44 L 310,65 L 338,17 L 338,150" fill={`url(#${item.id + "ISTB"})`}>
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default IdeasItemStub