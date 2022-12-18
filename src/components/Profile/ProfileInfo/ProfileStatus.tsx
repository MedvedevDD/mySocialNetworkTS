import React from "react";

type profileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<profileStatusPropsType> {
    state = {
        editMode: false,
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    // activateEditMode() {
    //     this.setState({
    //             editMode: true
    //         }
    //     )
    //
    // }
    // deActivateEditMode() {
    //     this.setState({
    //             editMode: false
    //         }
    //     )
    //
    // }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.toggleEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus