import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { loginAsyncThunk } from '../../stores/thunks/AuthThunk';
import { authSelector } from '../../stores/reducers/AuthReducer';


const LoginPageViewModel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { set, get } = useLocalStorage();
    const { isSuccess, isActive, message, accessToken, refreshToken } = useSelector(authSelector);
	const savedAccessToken = get({
		key: 'accessToken'
	});

    const loginAsync = ({ email, password }) => {
        dispatch(loginAsyncThunk({
            email,
            password
        }));
        set({
            key: "accessToken",
            value: accessToken
        })
        set({
            key: "refeshToken",
            value: refreshToken
        })
    };

    useEffect(() => {
        if (isSuccess != false) {
            window.location.href = "/#/home"
        }
        else {
            navigate("/login")
        }
    }, [isSuccess])

    const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validate: (values) => {
			let errors = {}
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = "invalid email"
			}
			if (values.password < 8)  {
				errors.password = "invalid password"
			}

			return errors
		},
		onSubmit: (values) => {
			loginAsync({
				email: values.email,
				password: values.password
			})
		}
	})

    useEffect(() => {
		savedAccessToken ? navigate('/home') : navigate('/');
	}, [savedAccessToken]);

    const saveToken = ({ key, value }) => {
		set({
			key,
			value
		});
	};

  return {
      isSuccess,
      message,
      accessToken,
      refreshToken,
      loginAsync,
      saveToken,
      formik
  }
}

export default LoginPageViewModel