import React from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, PROFILE_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    // onAuthStateChanged will return the unsubscribe funtion

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <header className="absolute w-full flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 align-middle">
          <p className="p-4 text-white font-bold">Hi {user.displayName}!!</p>
          <img className="w-14 h-14" src={PROFILE_ICON} alt="user icon" />
          <button className="font-bold text-white p-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
