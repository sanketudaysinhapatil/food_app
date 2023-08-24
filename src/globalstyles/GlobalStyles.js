import { Dimensions, StyleSheet } from "react-native";
export const GlobalStyles = StyleSheet.create({
    fullWidth : Dimensions.get("window").width,
    fullHeight : Dimensions.get("window").height
})