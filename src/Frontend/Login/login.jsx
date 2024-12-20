import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios";
import './login.css';
import React,{useState} from 'react';
import ResetCode from './forgotcode';

const Login = () => {
    // const dispatch = useDispatch();
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEditModal = () => {
        setShowEditModal(false);
      };


    const saveUser = async (myData) => {
        try {
            // const resp = await axios.post('/loginUser', myData);
            // const { user, myToken } = resp.data;

            if (myData) {
                // localStorage.setItem('myToken', myToken);
                // dispatch({
                //     type: 'USER_LOGIN_OK',
                //     user
                // });
                nav('/',{ state: { myData } });
            } else {
                alert('Invalid email or password!');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed!');
        }
    };

    return (
        <>
            <br />
            <br />

            <div className="containerss ">
                <div className="coverss">
                    <div className="frontss">
                        <img src="/images/image_3.jpg" alt="" />
                        <div className="text">
                            <span className="text-1">Every new booking is a <br /> new experience</span>
                            <span className="text-2">Let's get started</span>
                        </div>
                    </div>
                </div>
                <div className="formss">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login</div>
                            {/* <form > */}
                            <form onSubmit={handleSubmit(saveUser)}>
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-envelope"></i>
                                        <input placeholder="info@example.com" {...register('email', { required: true })} type="email" />
                                    </div>
                                    {errors.email && errors.email.type === "required" && <p className="error error-box">Please Enter Valid Email</p>}
                                    <div className="input-box">
                                        <i className="fas fa-lock"></i>
                                        <input placeholder="*********" {...register('password', { required: true, minLength: 4 })} type="password" />
                                    </div>
                                    {errors.password && errors.password.type === 'required' && <div className="error error-box">Please Enter Valid Password</div>}
                                    <div className="text"><a onClick={() => setShowEditModal(true)}>Forgot password?</a></div>
                                    <div className="button input-box">
                                        <button className="text-center w-full" type="submit">Login </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {showEditModal && (
        <ResetCode onHide={handleCloseEditModal} />
      )}
            <br />
            <br />
        </>
    );
};
export default Login;