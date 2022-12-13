import React from "react"
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";


type MapStateToPropsForRedirectType = {
    isAuth: boolean | undefined
}
const mapStateToPropsForRedirect = (state:AppRootStateType): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAutherized
    }
}

export function withAuthRedirect<T> (Component:React.ComponentType<T>) {
    const RedirectComponent = (props:MapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={"/Login"}/>
        return <Component {...restProps as T}/>

    }


    return connect(mapStateToPropsForRedirect)(RedirectComponent);
  }
