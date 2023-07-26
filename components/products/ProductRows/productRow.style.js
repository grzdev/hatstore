import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";


const styles = StyleSheet.create({
    rowBox: {
        marginTop: SIZES.xSmall -10,
        borderTopLeftRadius: 14, // 1rem equivalent in pixels
        borderTopRightRadius: 0,
        borderBottomRightRadius: 14, // 1rem equivalent in pixels
        borderBottomLeftRadius: 0,
    }
})

export default styles