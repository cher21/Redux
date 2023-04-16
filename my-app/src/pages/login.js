import logo from '../image/logo-2150297__340.jpg'
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { doRequestGetLogin } from '../redux/action/actionLogin';
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async (data) => {
        dispatch(doRequestGetLogin(data))
    }

    const loginState = useSelector(state => state.loginReducers)

    useEffect(() => {
        if (loginState.login) {
            console.log(loginState.login)
            navigate('/home')
        }
    }, [loginState.login])

    const handleError = (error) => {};

    const registerOptions = {
        name : { required: "Username is required" },
        pass : { required: "Password is required" }
    }

    return (
        <div>
        <form onSubmit={handleSubmit(handleLogin, handleError)}>
            <div class="min-h-screen flex justify-center items-center bg-white">
                <div class="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
                    <div class="py-8">
                        <picture>
                            <img width="200" class="-mt-10" src={logo} />
                        </picture>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input class="p-3 border-[1px] border-slate-500 rounded-sm w-80"
                        name="name" type="text" placeholder='Username'
                        {...register('name', registerOptions.name)} />
                        <small className="text-danger">
                        {errors?.name && errors.name.message}
                        </small>
                    </div>  
                    <div class="flex flex-col space-y-1">
                        <input class="p-3 border-[1px] border-slate-500 rounded-sm w-80"   
                        type="password"
                        name="pass"
                        placeholder='Password'
                        {...register('pass', registerOptions.pass)} />
                        <small className="text-danger">
                        {errors?.pass && errors.pass.message}
                        </small>
                        <p class="font-bold text-[#0070ba]">Forgot password?</p>
                    </div>

                    <div class="flex flex-col space-y-5 w-full">
                        <button class="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">
                            Login
                        </button>
                        <div class="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                            <div class="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                        </div>
                        <button class="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 
                        text-[#0070ba] font-bold transition duration-200">Sign Up</button>
                    </div>    
                </div>
            </div>
        </form>
    </div>
    )
}
