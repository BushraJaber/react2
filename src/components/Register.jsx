import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';


export default function Register() {
    const schema=yup.object({
        email:yup.string().required().min(5).max(100).email(),
        password:yup.string().required().min(2).max(20),
        userName:yup.string().required().min(3).max(20)
        
          });
   
    const formik = useFormik({
        initialValues: {
            userName:'',
            email:'',
            password:''
        },
        onSubmit: RegisterUser,
        validationSchema:schema

       
    });

    async function RegisterUser() {
     const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signup' ,formik.values);
     console.log(data);
   
    }

    return (
        <div>
        <form onSubmit={formik.handleSubmit}>
            <h1>Register</h1>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    name="userName"
                    id="name"
                    onBlur={formik.handleBlur}

                    value={formik.userName} 
                    placeholder=""
                />
                <label htmlFor="name">User Name</label>
                {formik.touched.userName &&  formik.errors.userName ? <div className="alert alert-danger">  {formik.errors.userName}</div>:null}

            </div>

            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    onChange={formik.handleChange}
                    name="email"
                    id="email"
                    onBlur={formik.handleBlur}

                    value={formik.email}  
                    placeholder=""
                />
                <label htmlFor="email">User Email</label>
                {formik.touched.email &&  formik.errors.email ? <div className="alert alert-danger">  {formik.errors.email}</div>:null}

            </div>

            <div className="form-floating mb-3">
                <input
                    type="password"
                    className="form-control"
                    onChange={formik.handleChange}
                    name="password"
                    id="password"
                    onBlur={formik.handleBlur}

                    value={formik.password}  
                    placeholder=""
                />
                <label htmlFor="password">User Password</label>
                {formik.touched.password &&  formik.errors.password ? <div className="alert alert-danger">  {formik.errors.password}</div>:null}

            </div>

            <button type="submit" className="btn btn-outline-info">Register</button>
        </form>
        </div>
    );
}
