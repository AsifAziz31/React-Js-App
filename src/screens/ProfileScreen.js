import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

const ProfileScreen = () => {
    return (
        <View>
            <Text style={styles.titleStyle}>PROFILE</Text>
            <Image
                style={styles.imageStyle}
                source={require("./../../assets/ami.jpeg")} />
            <Text> </Text>
            <Text style={styles.nameStyle}>Name: Md. Ashif Aziz</Text>
            <Text style={styles.otherStyle}>Student ID: 170042031</Text>
            <Text style={styles.otherStyle}>Room no: Non-Residential</Text>
            <Text style={styles.otherStyle}>Email: ashifaziz@iut-dhaka.edu</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "#5B5FE9",
    },
    otherStyle: {
        fontSize: 22,
        color: "#B370E4",
        textAlign: "center",
    },
    nameStyle: {
        fontSize: 28,
        color: "#B370E4",
        textAlign: "center",
    },
    imageStyle: {
        marginTop: 20,
        width: 400,
        height: 200,
        alignSelf: "center",
    },
});

export default ProfileScreen;