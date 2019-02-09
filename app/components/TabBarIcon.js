import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants";

export default ({ name }) => (
  <MaterialCommunityIcons name={name} size={26} color={Colors.blackColor} />
);
