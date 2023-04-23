import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      firstName: "Sukhrob",
      lastName: "Co",
      email: "sukhrob@gmail.com",
      password: bcrypt.hashSync("12345678", 8),
      isAdmin: true,
    },
  ],
};

export default data;
