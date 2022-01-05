import React from "react";
import style from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div>
            <div className={style.sidebar}>
               <h4> Friends</h4>
            </div>
            <div className={style.item}>
                <img src="https://png.pngtree.com/png-vector/20200625/ourmid/pngtree-business-person-short-hair-girl-silhouette-avatar-png-image_2266253.jpg"/>
                <div>
                    Ilya
                </div>
            </div>
        </div>
    )
}

export default Sidebar