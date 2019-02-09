import React from "react";
import { View, Image } from "react-native";
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
import TabBarIcon from "../components/TabBarIcon";

const CommonStack = (FirstScreen, FirstScreenOptions = {}) =>
  createStackNavigator({
    InitialScreen: {
      screen: FirstScreen,
      navigationOptions: {
        ...FirstScreenOptions
      }
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
      screen: CommonStack(Feed, {
        headerTitle: (
          <Image
            source={require("../assets/logo.png")}
            style={{ height: 35 }}
            resizeMode="contain"
          />
        )
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon name={focused ? "home" : "home-outline"} />
        )
      }
    },
    Search: {
      screen: CommonStack(Search),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon name={focused ? "compass" : "compass-outline"} />
        )
      }
    },
    Upload: {
      screen: View,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: <TabBarIcon name={"plus-box-outline"} />,
          tabBarOnPress: () => navigation.navigate("TakePhoto")
        };
      }
    },
    Notifications: {
      screen: CommonStack(Notifications),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon name={focused ? "heart" : "heart-outline"} />
        )
      }
    },
    Profile: {
      screen: CommonStack(Profile),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon name={focused ? "account" : "account-outline"} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);
