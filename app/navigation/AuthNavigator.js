import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/LogIn";
import SignUp from "../screens/SignUp";

export default createAppContainer(
  createStackNavigator({
    SignUp,
    Login
  })
);
