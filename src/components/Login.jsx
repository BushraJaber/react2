import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // استيراد مخصص

export default function Login({ setisLogin, setuserdata }) {
  const schema = yup.object({
    email: yup.string().required().min(5).max(100).email(),
    password: yup.string().required().min(2).max(20)
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: LoginUser,
    validationSchema: schema
  });

  async function LoginUser() {
    try {
      const { data } = await axios.post('https://ecommerce-node4.onrender.com/auth/signin', formik.values);
      console.log(data);
      if (data.message === 'success') {
        localStorage.setItem("userToken", data.token);
        setisLogin(true);
        const decoded = jwtDecode(data.token); // هنا قمنا بتصحيح استدعاء jwtDecode
        setuserdata(decoded);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

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
            value={formik.values.email} // تعديل هنا لقيمة الفورم
            placeholder=""
          />
          <label htmlFor="email">User Email</label>
          {formik.touched.email && formik.errors.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            name="password"
            id="password"
            onBlur={formik.handleBlur}
            value={formik.values.password} // تعديل هنا لقيمة الفورم
            placeholder=""
          />
          <label htmlFor="password">User Password</label>
          {formik.touched.password && formik.errors.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-outline-info">Login</button>
      </form>
    </div>
  );
}
