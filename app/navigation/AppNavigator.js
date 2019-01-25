import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = createSwitchNavigator({
  Auth: AuthNavigator
});

export default createAppContainer(AppNavigator);
