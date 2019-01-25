import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MainNavigator from "../../navigation/MainNavigator";
import AuthNavigator from "../../navigation/AuthNavigator";

export default ({ data, logIn }) => {
  const {
    auth: { isLoggedIn }
  } = data;
  if (isLoggedIn) {
    return <MainNavigator />;
  } else {
    return (
      <>
        <TouchableOpacity
          style={{
            marginTop: 100
          }}
          onPress={() => logIn()}
        >
          <View>
            <Text>log in</Text>
          </View>
        </TouchableOpacity>
        <AuthNavigator />
      </>
    );
  }
};
