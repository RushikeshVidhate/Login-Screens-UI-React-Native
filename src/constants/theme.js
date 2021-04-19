import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#9863EC",
    black: "#322F3B",
    white: "#FFFFFF",
    lightGray: '#EFEEEF',
    transparent: "transparent",
    background: '#FFFFFF'
}

export const SIZES = {
    base : 10,
    radius: 20,
    width,
    height
}

const theme = { COLORS, SIZES };
export default theme;