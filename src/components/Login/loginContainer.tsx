import React from "react";
import Login from "./login";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {loginTC} from "../../redux/auth-reducer";
import {loginDataType} from "../../api/api";


type mapStateToPropsType = {
    isAuth: boolean | undefined
    id: number | null
}
type mapDispatchToPropsType = {
    loginTC: (formData: loginDataType) => void
}
type LoginContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}

const LoginContainer = (props: LoginContainerPropsType) => {
    if (props.isAuth) return <Navigate to={'/Profile/' + props.id}/>
    return <>
        <Login loginTC={props.loginTC}/>
    </>
}
// class LoginContainer1 extends React.Component<LoginContainerPropsType> {
//
//     render() {
//         //@ts-ignore
//         if (this.props.isAuth) return <Navigate to={'/Profile/'+ this.props.id}/>
//
//         return <>
//
//             <Login loginTC={this.props.loginTC}/>
//         </>
//     }
// }

export default connect(mapStateToProps, {loginTC})(LoginContainer);