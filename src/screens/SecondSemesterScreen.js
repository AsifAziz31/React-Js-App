import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const SecondSemesterScreen = () => {
    const course_list = [
        { name: "1. HUM 4249", key: '1' },
        { name: "2. CSE 4203", key: '2' },
        { name: "3. CSE 4205", key: '3' },
        { name: "4. SWE 4201", key: '4' },
        { name: "5. Hum 4247", key: '5' },
        { name: "6. Hum 4242", key: '6' },
        { name: "7. Math 4241", key: '7' },
    ];
    return (
        <View>
            <Text style={styles.titleStyle}>Course List: 2nd Semester</Text>
            <Text> </Text>
            <FlatList
                style={styles.ListStyle}
                data={course_list}
                renderItem={function ({ item }) {
                    return <Text style={styles.textStyle}>{item.name}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "#8A9C4A",
    },
    textStyle: {
        fontSize: 22,
        color: "black",
        marginLeft: 25,
        marginVertical: 10,
    },
});

export default SecondSemesterScreen;