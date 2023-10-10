import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../../constants";

const styles = StyleSheet.create({
    loadingRow: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        rowGap: 10,
        columnGap: 5,
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 80,
        marginLeft: 10
    },
    loadingContainer: {
        width: 150,
        height: 230,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
        justifyContent: "center",
        alignItems: "center",
        // margin: 10, 
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: SIZES.xxLarge -15,
        paddingLeft: SIZES.small/2,
        marginBottom: 20
    },
    seperator: {
        height: 16,
    }
})

export default styles