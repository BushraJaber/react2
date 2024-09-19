import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        onSubmit: LoginUser,
        validate: values=>{
          let errors={};
          if (values.email.length <=10){
            errors.email="email is required !!!";

          }
          if(values.password.length<=2){
            errors.password="password is required !!!";

          }
          return errors;
          

        }
    });

    async function LoginUser() {
     const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signin' ,formik.values);
     console.log(data);
   
    }
    console.log(formik);

    return (
        <div>
        <form onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
        

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

            <button type="submit" className="btn btn-outline-info">Login</button>
        </form>
        </div>
    );
}
