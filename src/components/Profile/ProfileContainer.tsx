import React, {JSXElementConstructor} from "react";
import styles from "../Profile/Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    //getProfileStatusThunkCreator,
    getProfileThunkCreator,
    UserProfileType
} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

//export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
export type ProfilePropsType = {
    profile: UserProfileType | null
    profileStatus: string
}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
//@ts-ignore
        let userId = this.props.router.params.userId
        this.props.getProfileThunkCreator(userId)
        //this.props.getProfileStatusThunkCreator(userId)
    }



    render() {
        // if (!this.props.authProgress) return <Navigate to={"/Login"}/>
        return (

            <div className={styles.myProfile}>
                <Profile profile={this.props.profile} profileStatus={this.props.profileStatus}

                />
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
    profileStatus: string
    // authProgress: boolean | undefined
}
type mapDispatchToPropsType = {
    getProfileThunkCreator: (userId: number | null) => void
    getProfileStatusThunkCreator: (userId: number | null) => void
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus
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
    connect(mapStateToProps, {
        getProfileThunkCreator,
        //getProfileStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);