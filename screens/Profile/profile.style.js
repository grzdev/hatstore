import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/index'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    cover: {
        height: 290,
        width: "100%",
        resizeMode: "cover"
    },
    profileContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    bgLogo : {
        width: 180,
        height: 80,
        // resizeMode: "cover",
    },
    profile:{
        height: 130,
        width: 130,
        borderRadius: 999,
        borderColor: COLORS.primary,
        borderWidth: 2,
        resizeMode: "cover",
        marginTop: -80,
    },
    profileText: {
        fontFamily: "bold",
        fontSize: 24,
        marginTop: SIZES.small,
        color: "#23e873",
        marginHorizontal: 12,
        width: 220,
        textAlign: "center",
        lineHeight: 27,
        marginTop: 110,

    },
    name: {
        fontFamily: "bold",
        color: COLORS.primary,
        marginVertical: 5
    },
    btnBox: {
        flexDirection: "row",
        gap: 10,
        marginTop: 200,
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        padding: 2,
        borderColor: "#ebe9e9",
        borderRadius: SIZES.xSmall,
        borderWidth: 1,
        width: 140,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    menuText: {
        fontFamily: "bold",
        color: "#ebe9e9",
        // marginLeft: 8,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 26
    },
    loginBtn2: {
        backgroundColor: "#ebe9e9",
        padding: 2,
        // borderColor: "#23e873",
        borderRadius: SIZES.xSmall,
        borderWidth: 1,
        width: 140,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    menuText2: {
        fontFamily: "bold",
        color: COLORS.primary,
        // marginLeft: 8,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 26
    },
    menuWrapper: {
        marginTop: SIZES.xLarge,
        width: SIZES.width - SIZES.large,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12
    },
    menuItem: (borderBottomWidth) => ({
        borderBottomWidth: borderBottomWidth,
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderColor: COLORS.gray
    })
})

export default styles