import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: SIZES.width - 50,
        marginBottom: 12,
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.xLarge,
        letterSpacing: 2,
        marginLeft: 10
    },
})
