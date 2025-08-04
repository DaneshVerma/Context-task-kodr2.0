import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { Mystore } from "../Context/UserContext";


function Register() {
    const {setUserData, userData , setToggel, isDark} = useContext(Mystore)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // handle registration logic 
        localStorage.setItem("userData", JSON.stringify([...userData, data]));
        setUserData((prev) => [...prev, data]);
        toast.success("Registration successful");
        setToggel((prev) => !prev);
        reset();
    };

    return (
        <div className={`max-w-md mx-auto w-1/2 mt-10 p-6 ${isDark?"bg-gray-800":"bg-white"} rounded shadow`}>
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Username</label>
                    <input
                        type="text"
                        {...register("username", { required: "Username is required" })}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm">{errors.username.message}</p>
                    )}
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>
                <div>
                    <label className="block mb-1 font-medium">Mobile</label>
                    <input
                        type="tel"
                        {...register("mobile", {
                            required: "Mobile number is required",
                            pattern: {
                                value: /^[0-9]{10,15}$/,
                                message: "Invalid mobile number",
                            },
                        })}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                    />
                    {errors.mobile && (
                        <p className="text-red-500 text-sm">{errors.mobile.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Register
                </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account? <span onClick={() => setToggel((prev) => !prev)} className="text-blue-500 cursor-pointer">Login here</span> </p>
        </div>
    );
}
export default Register;