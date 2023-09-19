import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#28470c"
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge -5,
        zIndex: 999,
    },
    content: {
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: COLORS.lightWhite,
        fontSize: SIZES.xxLarge -9,
        textAlign: "center",
        fontFamily: "bold",
        marginHorizontal: 20
    },
    secondRow: {
        flexDirection: 'row',
        marginTop: 10
    },
    date: {
        color: COLORS.lightWhite,
        fontSize: SIZES.medium
    },
    minRead: {
        flexDirection: "row",
        marginLeft: 25
    },
    minReadText: {
        color: COLORS.lightWhite,
        fontSize: SIZES.medium
    },
    imageUrl: {
        width: 290,
        height: 190,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        marginTop: 25
    },
    subHeading: {
        color: COLORS.lightWhite,
        marginTop: 30,
        fontFamily: "semibold",
        fontSize: SIZES.large +4,
        textAlign: "flex-start"
    },
    text: {
        width: SIZES.width - 50,
        justifyContent: "center",
    },
    p1: {
        width: SIZES.width - 49,
        color: "white",
        marginTop: - 15 ,
        letterSpacing: 1,
        lineHeight: 18
    },
    subHeading2: {
        color: COLORS.lightWhite,
        marginTop: 30,
        fontFamily: "semibold",
        fontSize: SIZES.large +4,
        textAlign: "flex-start"
    },
    p2: {
        width: SIZES.width - 49,
        color: "white",
        marginTop: 10,
        letterSpacing: 1,
        lineHeight: 18
    },
    subHeading3: {
        color: COLORS.lightWhite,
        marginTop: 30,
        fontFamily: "semibold",
        fontSize: SIZES.large +4,
        textAlign: "flex-start"
    },
    p3: {
        width: SIZES.width - 49,
        color: "white",
        marginTop: 10,
        letterSpacing: 1,
        lineHeight: 18
    },
    subHeading4: {
        color: COLORS.lightWhite,
        marginTop: 30,
        fontFamily: "semibold",
        fontSize: SIZES.large +4,
        textAlign: "flex-start"
    },
    p4: {
        width: SIZES.width - 49,
        color: "white",
        marginTop: 10,
        letterSpacing: 1,
        lineHeight: 18
    },
    subHeading5: {
        color: COLORS.lightWhite,
        marginTop: 30,
        fontFamily: "semibold",
        fontSize: SIZES.large +4,
        textAlign: "flex-start"
    },
    p5: {
        width: SIZES.width - 49,
        color: "white",
        marginTop: 10,
        letterSpacing: 1,
        lineHeight: 18
    },
    credits: {
        color: COLORS.gray2,
        marginTop: 30,
        alignSelf: "center"
    }
})

export default styles