import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/LogIn";
import SignUp from "../screens/SignUp";

const StackNavigator = createStackNavigator({
  SignUp,
  Login
});

export default createAppContainer(StackNavigator);
