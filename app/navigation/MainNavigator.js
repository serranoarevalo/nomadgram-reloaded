import { createStackNavigator, createAppContainer } from "react-navigation";
import Tabs from "./TabNavigator";
import Upload from "../screens/Upload";
import TakePhoto from "../screens/TakePhoto";

export default createAppContainer(
  createStackNavigator(
    {
      Tabs,
      TakePhoto: {
        screen: TakePhoto,
        navigationOptions: {
          header: null
        }
      },
      Upload: {
        screen: Upload,
        navigationOptions: {
          title: "Upload Photo"
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal"
    }
  )
);
