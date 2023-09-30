import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";

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
    favContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: SIZES.xSmall,
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#fff",
        ...SHADOWS.medium,
        shadowColor: COLORS.secondary,
    },
    imageContainer: {
        width: 70,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 65,
        borderRadius: SIZES.medium,
        resizeMode: "cover"
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    fav: {
        fontFamily: "bold",
        color: COLORS.primary,
        fontSize: SIZES.medium 
    },
    price: {
        fontFamily: "regular",
        color: COLORS.gray,
        fontSize: 14 
    }
})

export default styles