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

export const isEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
