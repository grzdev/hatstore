import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    artcileLogo : {
        width: 140,
        height: 60,
        // resizeMode: "cover",
        position: "fixed",
        marginTop: 70
    },
    artcileDiv:{
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: COLORS.lightWhite 
    },
   
})

export default styles