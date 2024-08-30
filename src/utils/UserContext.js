import { createContext } from "react";

const UserContext = createContext({
  //This is how we create the context
  loggedInUser: "Default User", //And you can access this context anywhere in the application. How ? Sol- React provide you the useContext hook where in other components you can call like this const data = useContext(UserContext)
});

export default UserContext;
