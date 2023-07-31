import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/index"

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText: ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge -5,
        marginTop: SIZES.xSmall -15,
        color: COLORS.black,
        marginHorizontal: 12 
    }),
    welcomeText2:{
        fontFamily: "bold",
        fontSize: SIZES.large,
        marginTop: SIZES.xSmall -15,
        color: COLORS.primary,
        marginHorizontal: 12 
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium, 
        marginHorizontal: SIZES.small,
        height: 50
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
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    }  
})

export default styles