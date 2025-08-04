import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { Mystore } from "../Context/UserContext";


function Login() {
    const {userData , setToggel, isDark} = useContext(Mystore)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        // Handle login logic here
        console.log(data);
       let user =  userData.find(user => user.email === data.email && user.password === data.password)
       user? toast.success("Login successful") : toast.error("user not found");
       reset();
    };

    return (
<div className={`max-w-md mx-auto w-1/2 mt-10 p-6 ${isDark?"bg-gray-800":"bg-white"} rounded shadow`}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`${isDark?"bg-gray-700":"bg-white"} p-8 rounded shadow-md w-full`}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className={`w-full px-3 py-2 border rounded ${
                            errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-medium" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        className={`w-full px-3 py-2 border rounded ${
                            errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
<p className={`mt-4 text-center text-sm ${isDark? "text-gray-400": "text-gray-600"}`}>                Dont have an account? <span onClick={() => setToggel((prev) => !prev)} className="text-blue-500 cursor-pointer">Register here</span> </p>
        </div>
    );
}

export default Login;