import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants/index"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow:{
        width: SIZES.width -50,
        marginHorizontal: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "#001d29",
        borderRadius: SIZES.large,
        top: SIZES.large,
        zIndex: 999
    },
    heading: {
        fontFamily:"semibold",
        fontSize: SIZES.large,
        color: COLORS.lightWhite,
        marginLeft: 10
    }
})

export default styles