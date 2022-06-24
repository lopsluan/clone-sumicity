import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '90%',
        alignSelf: 'center',
        shadowColor: "#171717",
        elevation: 20,
        shadowOffset: {height: -2, width: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#FFF',
        paddingHorizontal: 25,
        borderRadius: 3,
    },
    text: {
        color: '#000'
    },

    title: {
        fontSize: 21,
        marginVertical: 20,
        fontWeight: '500'
    },

    body: {
        fontSize: 18,
        marginBottom: 20,
    },

    date: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 20,
    }
})