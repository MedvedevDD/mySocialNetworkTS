import React, {KeyboardEvent} from "react";

type profileStatusPropsType = {
    status: string
    changeStatus: (status: string) => void
}

class ProfileStatus extends React.Component<profileStatusPropsType> {

    state = {
        editMode: false,
        currentStatus: this.props.status
    }

    // toggleEditMode = () => {
    //     this.setState({
    //         editMode: !this.state.editMode,
    //         currentStatus: this.props.status
    //     })
    //     this.props.changeStatus(this.state.currentStatus)
    // }

    onStatusChange(e: string) {
        this.setState({
            currentStatus: e
        })
    }

    onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter') {
            //alert(e.key)
            this.deActivateEditMode()
        }

    }
    activateEditMode = () => {
        this.setState({
                editMode: true,
                //currentStatus: this.props.status
            }
        )
    }
    deActivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
        this.props.changeStatus(this.state.currentStatus)
    }

    componentDidUpdate(prevProps: Readonly<profileStatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                currentStatus: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                Status:
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.status || "------------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={(e) => {
                            this.onStatusChange(e.currentTarget.value)
                        }} autoFocus={true}
                               onBlur={this.deActivateEditMode}
                               onKeyPress={this.onKeyPressHandler}
                               value={this.state.currentStatus}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus