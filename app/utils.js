import { AsyncStorage } from "react-native";

const JWT = "jwt";

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(JWT);
    if (token) {
      token = token;
    }
  } catch {
    token = null;
  }
};
