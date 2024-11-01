import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';
import { useEffect } from 'react';
import useAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {

    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login);

    // useEffect(() => {
    //     if (error === undefined) {
    //         console.log("General error: Signup failed with a 400 error");
    //         showToast("Error", "Signup failed due to an invalid request. Please check your input.", "error");
    //     } else if (error) {
    //         console.log("Error from hook:", error.message);
    //         showToast("Error", error.message, "error");
    //     }
    // }, [error]);

    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
            showToast("Error","Please fill all the fields", "error");
            return
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            console.log(error);
            if (!newUser && error) {
                showToast("Error", error.message, "error");
                return;
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullName: inputs.fullName,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            }
        }
        catch (error) {
            showToast("Error", error.message, "error");
            // const errorMessage = error.message || "An error occurred, please try again.";
            // if (errorMessage.includes("EMAIL_EXISTS")) {
            //     showToast("Error", "This email is already registered. Please try logging in.", "error");
            // } else {
            //     showToast("Error", errorMessage, "error");
            // }
        }
    }
  return {loading,error,signup}
}

export default useSignUpWithEmailAndPassword