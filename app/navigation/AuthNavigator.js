import { createStackNavigator, createAppContainer } from "react-navigation";
import Auth from "../screens/Auth";

export default createAppContainer(
  createStackNavigator(
    {
      Auth
    },
    {
      mode: "modal",
      headerMode: "none"
    }
  )
);
