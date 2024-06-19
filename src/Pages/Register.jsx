import { useContext, useState } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiEyeLine ,RiEyeCloseLine } from "react-icons/ri";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
const Register = () => {
    const { createUser,logOut } = useContext(AuthContext);
    const [showPassword , setShowPassword] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        if (password.length < 6) {
            toast.warning("Password Should be at Least 6 Characters or Longer!");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warning("Your password should have at least one upper case characters!");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.warning("Your password should have at least one lower case characters!");
            return;
        }


        //create user
        createUser(email, password)
            .then(result => {
          

                logOut()
                .then()
                .catch();


                //update profile
                updateProfile(result.user , {
                    displayName : name,
                    photoURL : photo,
                })
                .then(() =>{
                    toast.success("User created successfully.");
                })
                .catch(error => console.log("Error : ", error));
            })
            .catch(error => {
                console.log("Error : ", error);
                toast.error(error.message);
            })

    }
    return (
        <div className="container mx-auto border-2 border-[#c19d68] my-10 flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <Helmet>
                <title>CozyNest|Register</title>
            </Helmet>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm dark:text-gray-600">Sign up to create your account</p>
            </div>
            <form onSubmit={handleRegister} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input type="text" required name="name" id="name" placeholder="Your Name Here..." className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" required name="email" id="email" placeholder="Your Email Here..." className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm">Photo URL</label>
                        <input type="text" name="photo" id="photo" required placeholder="Photo URL Here..." className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type={showPassword ? "text" : "password" }
                            required name="password" id="password" placeholder="Make a strong Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800" />
                            <span className="text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <RiEyeLine /> : <RiEyeCloseLine />
                                }
                            </span>
                        </label>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 bg-[#c19d68] text-white">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already you have an account?
                        <Link to='/login'><a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600 ">Sign in</a></Link>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;