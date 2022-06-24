import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        width: "90%",
        height: 55,
        marginTop: 15,
    },

    text_blue: {
        fontSize: 17,
        fontWeight: '400',
        color: '#FFF'
    },

    text_white: {
        fontSize: 17,
        fontWeight: '400',
        color: '#4682B4'
    },

    blue: {
        backgroundColor: '#4682B4'
    },

    white: {
        backgroundColor: '#FFF',
        borderWidth: 1.5,
        borderColor: "#4682B4"
    }
})