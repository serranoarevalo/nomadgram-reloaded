import { createStackNavigator, createAppContainer } from "react-navigation";
import Feed from "../screens/Feed";

const StackNavigator = createStackNavigator({
  Feed
});

export default createAppContainer(StackNavigator);
