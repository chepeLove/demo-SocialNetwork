import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status,updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>{profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;