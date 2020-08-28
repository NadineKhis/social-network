import React from "react";
import beach from "../../../images/beach.jpg";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return  <div>
        <div className={s.profileImg}>
            <img src={beach} alt="nope" />
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
</div>
}

export default ProfileInfo;