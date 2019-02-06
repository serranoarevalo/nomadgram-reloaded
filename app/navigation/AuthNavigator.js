import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/LogIn";
import SignUp from "../screens/SignUp";

export default createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    SignUp
  })
);
