import React from "react";
import s from "./login.module.css"
import {Field, reduxForm} from "redux-form";
// import {loginTC} from "../../redux/auth-reducer";
import { useDispatch } from "react-redux";
import {minLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {loginDataType} from "../../api/api";

const minPasswordLength = minLengthCreator(8)

const LoginForm = (props:any) => {

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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {
    //const dispatch = useDispatch()
    const onSubmit = (formData: loginDataType) => {
        props.loginTC(formData)
        console.log(props.loginTC(formData))
    }
    return <>
        <div className={s.login}>
            <h1>LOGIN PLEASE</h1>
        </div>
        {/*//@ts-ignore*/}
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}
export default Login;