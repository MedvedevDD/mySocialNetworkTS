import React, {useCallback, useEffect} from "react";
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/user.png"
import {Preloader} from "../../common/preloader/Preloader";
import {
    changeUserProfileStatusThunkCreator,
    //getProfileStatusThunkCreator,
    UserProfileType
} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {useDispatch} from "react-redux";

type ProfileInfoPropsType = {
    profile: UserProfileType | null
    profileStatus: string
}

function ProfileInfo(props: ProfileInfoPropsType) {
    const dispatch = useDispatch()
    const changeStatus = useCallback((newStatus: string) => {
        dispatch(changeUserProfileStatusThunkCreator(newStatus))
    }, [dispatch])
    // useEffect(() => {
    //     // debugger
    //     props.profile && dispatch(getProfileStatusThunkCreator(props.profile.userId))
    // }, [])
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.image}*/}
            {/*         src='https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg'/>*/}
            {/*</div>*/}

            <div className={s.profileInfoBox}>
                <div className={s.userPhotoLarge}>
                    <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                </div>
                <div className={s.userFullName}>
                    {props.profile.fullName}
                </div>
                <ProfileStatus status={props.profileStatus} changeStatus={changeStatus}/>
                <div className={s.aboutMeBlock}>
                    <span className={s.aboutMeTitle}>Немного обо мне:</span>

                    {props.profile.aboutMe}
                </div>
                <div className={s.userLinkBox}>
                    <div>facebook:
                        <a href={(props.profile.contacts.facebook) ? props.profile.contacts.facebook : undefined}>{props.profile.contacts.facebook}</a>
                    </div>
                    <div>website:
                        <a href={(props.profile.contacts.website) ? props.profile.contacts.website : undefined}>{props.profile.contacts.website}</a>
                    </div>
                    <div>vk:
                        <a href={(props.profile.contacts.vk) ? props.profile.contacts.vk : undefined}>{props.profile.contacts.vk}</a>
                    </div>
                    <div>twitter:
                        <a href={(props.profile.contacts.twitter) ? props.profile.contacts.twitter : undefined}>{props.profile.contacts.twitter}</a>
                    </div>
                    <div>instagram:
                        <a href={(props.profile.contacts.instagram) ? props.profile.contacts.instagram : undefined}>{props.profile.contacts.instagram}</a>
                    </div>
                    <div>youtube:
                        <a href={(props.profile.contacts.youtube) ? props.profile.contacts.youtube : undefined}>{props.profile.contacts.youtube}</a>
                    </div>
                    <div>github:
                        <a href={(props.profile.contacts.github) ? props.profile.contacts.github : undefined}>{props.profile.contacts.github}</a>
                    </div>
                    <div>mainLink:
                        <a href={(props.profile.contacts.mainLink) ? props.profile.contacts.mainLink : undefined}>{props.profile.contacts.mainLink}</a>
                    </div>
                </div>
                <div>
                    <span>Ищу работу</span>
                    <input type={"checkbox"} onChange={alert} checked={props.profile.lookingForAJob}/>
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;