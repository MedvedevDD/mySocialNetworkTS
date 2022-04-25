import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {AuthStateType, setUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {usersApi} from "../../api/api";

export type headerContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<headerContainerPropsType> {
    componentDidMount() {
        usersApi.getMyAuthData()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    this.props.setUserData({id, login, email})

                    // axios.get(`https://social-network.samuraijs.com/api/1.0/` + response.data.data.id, {
                    //     withCredentials: true
                    // })
                    // .then(response => {
                    //     if (response.data.resultCode === 0) {
                    //
                    //         this.props.setUserData({id, login, email})}})

                }
            })
    }

    render() {

        return (
            <Header {...this.props} auth={this.props.auth}/>
        )
    }
}

type mapStateToPropsType = {
    auth: AuthStateType
}
type mapDispatchToPropsType = {
    setUserData: ({id, login, email}: AuthStateType) => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, {setUserData})(HeaderContainer);