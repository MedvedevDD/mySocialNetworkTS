import React from "react";
import s from "./login.module.css"
import {Field, reduxForm} from "redux-form";
import {loginTC} from "../../redux/auth-reducer";
import { useDispatch } from "react-redux";


const LoginForm = (props:any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Pass'} name={'password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = () => {
    const dispatch = useDispatch()
    const onSubmit = (formData:any) => {
        dispatch(loginTC(formData))
    }
    return <>
        <div className={s.login}>
            <h1>LOGIN PLEASE</h1>
        </div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}
export default Login;