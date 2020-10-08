import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.HomeStyle}>HOME</Text>

            <Image
                style={styles.IUTlogoStyle}
                source={require("./../../assets/IUT.png")} />
            <Text style={styles.CSEstyle}>Department of CSE</Text>
            <Text style={styles.SWEstyle}>Programme: SWE</Text>

                <View style={styles.profileStyle}>
                    <TouchableOpacity
                        style={{ alignSelf: "center", }}
                        onPress={function () {
                            props.navigation.navigate("Profile");
                        }}
                    >
                        <Text style={styles.opacityTextStyle}>My Profile</Text>
                    </TouchableOpacity>
                </View>
            

            <View style={styles.buttonStyle}>
                <Button
                    title="Semester Wise Course List"
                    onPress={function () {
                        props.navigation.navigate("Semesters");
                    }}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="List of Faculty Members"
                    onPress={function () {
                        props.navigation.navigate("Faculty Members");
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    HomeStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "#5B5FE9",
        marginBottom: 8,
    },
    CSEstyle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#5B5FE9",
        textAlign: "center",
        marginTop: 2,
    },
    SWEstyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#5B5FE9",
        textAlign: "center",
        marginBottom: 4,
    },
    IUTlogoStyle: {
        width: 130,
        height: 220,
        alignSelf: "center",
    },
    buttonStyle: {
        backgroundColor: "#67DA50",
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        alignContent: "center",
    },
    profileStyle: {
        backgroundColor: "#61E2E8",
        marginTop: 10,
        padding: 10,
        alignSelf: "center",
    },
});

export default HomeScreen;