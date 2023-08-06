import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";


const styles = StyleSheet.create({
    loadingRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    loadingContainer: {
        width: 160,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    rowBox: {
        marginTop: SIZES.xSmall -10,
        borderTopLeftRadius: 14, // 1rem equivalent in pixels
        borderTopRightRadius: 0,
        borderBottomRightRadius: 14, // 1rem equivalent in pixels
        borderBottomLeftRadius: 0,
    }
})

export default styles