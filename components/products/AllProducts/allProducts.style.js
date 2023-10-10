import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    upperRow:{
        width: SIZES.width -45,
        marginHorizontal: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "#001d29",
        borderRadius: SIZES.large,
        top: SIZES.xxLarge + 5,
        zIndex: 999
    },
    heading: {
        fontFamily:"semibold",
        fontSize: SIZES.large,
        color: COLORS.lightWhite,
        marginLeft: 10
    },
    firstDiv: {
        flexDirection: "row",
        width: SIZES.width,
        paddingHorizontal: 20,
        paddingTop: SIZES.xxLarge +30,

    },
    secondDiv: {
        flexDirection: "row",
        width: SIZES.width,
        paddingHorizontal: 20,
        paddingTop: SIZES.small,
    },
    categoryDiv: {
        // marginTop: 10
    },
    category: {
        fontFamily: "semibold",
        fontSize: SIZES.medium +2 ,
    },
    categoryPage: {
        marginLeft: "auto",
        marginBottom: 10
    },
    seeAll: {
        fontFamily: "semibold",
        fontSize: SIZES.medium +2 ,
        color: COLORS.gray
    },
})

export default styles