import { IProfile } from "interfaces";
import { FormAuthorization, FormProfile } from "modules";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, userResponseSelector } from "store/global";
import classes from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(userResponseSelector);
  const profile = user?.profile;

  const saveProfileHandler = (values: IProfile) => {
    dispatch(updateProfile(values));
  };

  return (
    <div className={classes.wrapper}>
      <h1>My Profile</h1>
      {profile ? (
        <FormProfile profile={profile} onSubmit={saveProfileHandler} />
      ) : (
        <FormAuthorization />
      )}
    </div>
  );
};
export default ProfilePage;
