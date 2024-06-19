import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import '../Components/Animation.css'
import { Helmet } from "react-helmet-async";
const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user.displayName || '');
    const [photoURL, setPhotoURL] = useState(user.photoURL || '');

    const handleSaveChanges = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth(); 
            const currentUser = auth.currentUser; 

            if (!currentUser) {
                throw new Error('User not authenticated.');
            }

            await updateProfile(currentUser, {
                displayName: displayName,
                photoURL: photoURL,
            });

           
            updateUserProfile({
                ...user,
                displayName: displayName,
                photoURL: photoURL,
            });

            toast.success("Profile Updated Successfully.")
        } catch (error) {
            console.error('Error updating profile:', error.message);
            toast.error("Failed to update profile. Please try again.");
        }
    };

    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <Helmet>
                <title>CozyNest|UpdateProfile</title>
            </Helmet>
            <form onSubmit={handleSaveChanges} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-4xl  animate__animated animate__bounceInLeft">Update Profile</p>
                        <p className="text-xs animate__animated  animate__bounceInRight">Refresh your look, update your profile!</p>
                        <p className="text-xl text-[#c19d68]">{user.email}</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="displayName" className="block mb-2 text-sm">Name</label>
                            <input
                                type="text"
                                required
                                id="displayName"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                            />
                        </div>
                        <br /><br />
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="photoURL" className="block mb-2 text-sm">Photo URL</label>
                            <input
                                type="text"
                                required
                                id="photoURL"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                            />
                        </div>
                    </div>
                </fieldset>
                <button type="submit" className=" px-8 py-3 font-semibold rounded-full bg-[#c19d68] text-gray-100">Save</button>
            </form>
            <ToastContainer />
        </section>
    );
};

export default UpdateProfile;
