import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
     },
     upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge +25,
        zIndex: 999,
        width: SIZES.width -44
     },
     image: {
        aspectRatio: 1,
        resizeMode: "cover"
     },
     details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: 24, 
        borderTopRightRadius: 24,
     },
     titleRow:{
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -44,
        top: 20
     },
     title: {
        fontFamily: "bold",
        fontSize: SIZES.large+7
     },
     priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large,
     },
     price: {
        fontFamily: "semibold",
        fontSize: SIZES.large,
        paddingHorizontal: 10
     },
     ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -10,
        top: 3
     },
     rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.large,
     },
     ratingText: {
        color: COLORS.gray,
        fontFamily: "medium",
        paddingHorizontal: SIZES.xSmall,
        alignSelf: "center"
     },
     descriptionWrapper:{
        marginTop: SIZES.large,
        marginHorizontal: SIZES.large
     },
     description: {
        fontFamily: "medium",
        fontSize: SIZES.large,
     },
     descText: {
        fontFamily: "regular",
        textAlign: "justify",
        fontSize: SIZES.small+2,
        marginBottom: SIZES.small,
        marginTop: SIZES.small-9,
     },
     location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: SIZES.large,
        marginHorizontal: 12
     },
     cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width,
     }, 
     cartBtn: {
      width: SIZES.width*0.5,
      backgroundColor: COLORS.black,
      padding: SIZES.small-2,
      borderRadius: SIZES.large,
      marginLeft: 12,
     },
     cartText:{
      marginLeft: SIZES.small,
      color: COLORS.lightWhite,
      fontSize: SIZES.medium,
      fontFamily: "bold"
     },
     addCart: {
      width: 37,
      height: 37,
      borderRadius: 50,
      margin: SIZES.small,
      backgroundColor: COLORS.black,
      alignItems: "center",
      justifyContent: "center"
     }
})

export default styles