import { createStackNavigator, createAppContainer } from "react-navigation";
import Feed from "../screens/Feed";

export default createAppContainer(
  createStackNavigator({
    Feed
  })
);
