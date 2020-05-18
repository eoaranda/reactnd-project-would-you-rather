import React from "react";

const AvatarImage = (props) => {
  const { user, classStyle } = props;
  return (
    <img
      src={user.avatarURL}
      alt="Avatar"
      className={classStyle ? classStyle : "avatar"}
    />
  );
};

export default AvatarImage;
