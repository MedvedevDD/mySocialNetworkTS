import React from "react";
import Login from "./login";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";


type mapStateToPropsType = {}
type mapDispatchToPropsType = {}
type LoginContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAutherized,
        id: state.auth.id
    }
}

class LoginContainer extends React.Component<LoginContainerPropsType> {

    render() {
        //@ts-ignore
        if (this.props.isAuth) return <Navigate to={'/Profile/'+ this.props.id}/>
        return <>
            <Login/>
        </>
    }
}

export default connect(mapStateToProps)(LoginContainer);