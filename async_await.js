const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Sara",
  },
  {
    id: 3,
    name: "Bob",
  },
];

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const result = users.find((user, index) => {
      return user.id === id;
    });
    resolve(result);
  });
};

const updateName = (user, name) => {
  return new Promise((resolve, reject) => {
    if (!user) {
      reject("User cannot be empty");
    }
    user.name = name;
    resolve(user);
  });
};

getUserById(1)
  .then((user) => {
    console.log("original user value: ", user);
    return updateName(user, "Hari");
  })
  .then((user) => {
    console.log("new updated result: ", user);
  })
  .catch((err) => console.log("Error:", err));

const updateUser = async (id, name) => {
    const user = await getUserById(id);
    console.log(user);
}
updateUser(1, "Hari");
