import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.xLarge +5,
        color: COLORS.lightWhite,
        alignItems: "center",
        marginBottom: SIZES.small,
        marginTop: 120
    },
    wrapper: {
        marginBottom: 20,
        // marginHorizontal: 20
    },
    label: {
        fontFamily: "regular",
        fontSize: SIZES.medium,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "left",
        color: COLORS.lightWhite
    },
    inputWrapper: (borderColor) => ({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center"
    }),
    iconStyle: {
       marginRight: 10 
    },
    errorMessage: {
        color: COLORS.red,
        fontFamily: "regular",
        marginTop: 5,
        marginLeft: 5,
        fontSize: SIZES.xSmall
    },
    registration: {
        marginTop: 5,
        textAlign: "center",
        color: COLORS.lightWhite,
    }
})

export default styles