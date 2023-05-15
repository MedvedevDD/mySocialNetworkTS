import React from "react";
import s from "./login.module.css"
import formStyleError from "./../common/FormsControls/FormsControls.module.css"

import {Field, InjectedFormProps, reduxForm} from "redux-form";
// import {loginTC} from "../../redux/auth-reducer";
import { useDispatch } from "react-redux";
import {minLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {FormDataType} from "../../api/api";

const minPasswordLength = minLengthCreator(8)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props:any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}
                       validate={[requiredField, minPasswordLength]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            { props.error && <div className={formStyleError.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    //const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData)
    }
    return <>
        <div className={s.login}>
            <h1>LOGIN PLEASE</h1>
        </div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}
export default Login;