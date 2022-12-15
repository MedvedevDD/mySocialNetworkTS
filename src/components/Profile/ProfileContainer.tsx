import React, {JSXElementConstructor} from "react";
import styles from "../Profile/Profile.module.css";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getProfileThunkCreator, ProfilePageType, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {usersApi} from "../../api/api";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import { compose } from "redux";

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
//@ts-ignore
        let userId = this.props.router.params.userId
        this.props.getProfileThunkCreator(userId)
    }


    render() {
        // if (!this.props.authProgress) return <Navigate to={"/Login"}/>
        return (

            <div className={styles.myProfile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        )
    }
}

// let AuthRedirectComponent = (props:any) => {
//     //@ts-ignore
//     if (!props.authProgress) return <Navigate to={"/Login"}/>
//     return <ProfileContainer {...props}/>
// }

type mapStateToPropsType = {
    profile: UserProfileType | null,
    // authProgress: boolean | undefined
}
type mapDispatchToPropsType = {
    getProfileThunkCreator: (userId: number | null) => void
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        // authProgress: state.auth.isAutherized
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

// export const withAuthRedirect(connect(mapStateToProps, {getProfileThunkCreator})
// (withRouter(ProfileContainer)));

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getProfileThunkCreator}),
    withRouter
)(ProfileContainer);