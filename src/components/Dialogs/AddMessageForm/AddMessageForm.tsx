import s from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import React from "react";

const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messages}>
                <Field name={'newMessageBody'} component={Textarea}
                       placeholder="TypeIn your message here"
                       validate={[requiredField, maxLength100]}/>
                <button>Add Message</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)