import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F33122d38-f11f-41e4-a058-e644e46080cd_2500x677.svg"
        alt="header-logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 mx-2" alt="usericon" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="font-bold hover:text-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
