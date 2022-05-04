import React, {JSXElementConstructor} from "react";
import styles from "../Profile/Profile.module.css";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getProfileThunkCreator, ProfilePageType, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {usersApi} from "../../api/api";

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
//@ts-ignore
        let userId = this.props.router.params.userId
        this.props.getProfileThunkCreator(userId)
    }


    render() {

        return (

            <div className={styles.myProfile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        )
    }
}

type mapStateToPropsType = {
    profile: UserProfileType | null
}
type mapDispatchToPropsType = {
    getProfileThunkCreator: (userId: number | null) => void
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
//оболочка для классовой компонеты
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getProfileThunkCreator})(withRouter(ProfileContainer));