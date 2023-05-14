import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {AuthStateType, getMyAuthDataThunkCreator, logOutTC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

export type headerContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<headerContainerPropsType> {
    componentDidMount() {
        this.props.getMyAuthDataThunkCreator()
    }

    render() {

        return (
            <Header {...this.props} auth={this.props.auth} logOutTC={this.props.logOutTC}/>
        )
    }
}

type mapStateToPropsType = {
    auth: AuthStateType
}
type mapDispatchToPropsType = {
    getMyAuthDataThunkCreator: () => void
    logOutTC: () => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, {getMyAuthDataThunkCreator, logOutTC})(HeaderContainer);