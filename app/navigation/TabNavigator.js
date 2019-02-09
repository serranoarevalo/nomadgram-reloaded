import { View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Comments from "../screens/Comments";
import Likes from "../screens/Likes";
import Photo from "../screens/Photo";
import ProfileDetail from "../screens/ProfileDetail";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const CommonStack = (FirstScreen, FirstScreenOptions = {}) =>
  createStackNavigator({
    InitialScreen: {
      screen: FirstScreen,
      ...FirstScreenOptions
    },
    Likes: {
      screen: Likes,
      navigationOptions: {
        headerTitle: "Likes"
      }
    },
    Comments: {
      screen: Comments,
      navigationOptions: {
        headerTitle: "Comments"
      }
    },
    ProfileDetail,
    Photo: {
      screen: Photo,
      navigationOptions: {
        headerTitle: "Photo"
      }
    }
  });

export default createBottomTabNavigator(
  {
    Feed: {
      screen: CommonStack(Feed)
    },
    Search: {
      screen: CommonStack(Search)
    },
    Upload: {
      screen: View
    },
    Notifications: {
      screen: CommonStack(Notifications)
    },
    Profile: {
      screen: CommonStack(Profile)
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);
