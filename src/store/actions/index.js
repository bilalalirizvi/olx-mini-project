const storeUser = (user) => {
  return {
    type: "ADD_USER",
    data: user,
  };
};

const removeUser = () => {
  return {
    type: "REMOVE_USER",
  };
};

const currUserData = (data) => {
  return {
    type: "CURRENT_USER_DATA",
    data: data,
  };
};

export { storeUser, removeUser, currUserData };
