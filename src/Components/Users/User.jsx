import style from "./Users.module.css";
import userPhoto from "../Assets/image users/users png.png";
import React from "react";
import {NavLink} from "react-router-dom";



let User = ({user,followingInProgress,unfollow,follow}) => {

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
                    </NavLink>
                        </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id===user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id===user.id)} onClick={() => {
                        follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                   <span>
                       <div>{user.name}</div>
                       <div>{user.status}</div>
                   </span>
                   <span>
                       <div>{'user.location.country'}</div>
                       <div>{'user.location.city'}</div>
                   </span>
                </span>
            </div>
    )
        }


export default User