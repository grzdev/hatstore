import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index"

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium, 
        marginHorizontal: SIZES.medium,
        height: 50,
        position: "absolute",
        zIndex: 999,
        width: SIZES.width,
        paddingHorizontal: 40,
        top: SIZES.xxLarge,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray 
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,

    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        marginLeft: - SIZES.large
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    searchImage: {
        resizeMode: "contain",
        width: SIZES.width -80,
        height: SIZES.height -300,
        opacity: 0.9
    },
    rowBox: {
        marginTop: SIZES.xSmall -10,
        borderTopLeftRadius: 14, // 1rem equivalent in pixels
        borderTopRightRadius: 0,
        borderBottomRightRadius: 14, // 1rem equivalent in pixels
        borderBottomLeftRadius: 0,
    },
    productContainer: {
        alignItems: "center",
        paddingTop: 80,
        paddingLeft: SIZES.small,
        marginBottom: 60
    },
    seperator: {
        height: 16,
    },
    
})

export default styles