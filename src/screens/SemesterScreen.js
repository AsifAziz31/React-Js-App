import React from 'react';
import { Text, StyleSheet, View, Image, Button } from "react-native";

const SemesterScreen = (props) => {
    //console.log(props);
    return (
        <View>
            <Text style={styles.titleStyle}>Semester wise course list</Text>

            <View style={styles.buttonStyle}>
                <Button
                    title="1st Semester"
                    onPress={function () {
                        props.navigation.navigate("1st Semester");
                    }}
                    color="#A4BA56"
                />
            </View>

            <View style={styles.buttonStyle}>
                <Button
                    title="2nd Semester"
                    onPress={function () {
                        props.navigation.navigate("2nd Semester");
                    }}
                    color="#8A9C4A"
                />
            </View>

            <View style={styles.buttonStyle}>
                <Button
                    title="3rd Semester"
                    onPress={function () {
                        props.navigation.navigate("3rd Semester");
                    }}
                    color="#4C5629"
                />
            </View>

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
        marginBottom: 125,
    },
    buttonStyle: {
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        alignContent: "center",
    },
});

export default SemesterScreen;