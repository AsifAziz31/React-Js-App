import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ThirdSemesterScreen = () => {
    const course_list = [
        { name: "1. Math 4341", key: '1' },
        { name: "2. CSE 4303", key: '2' },
        { name: "3. CSE 4305", key: '3' },
        { name: "4. CSE 4307", key: '4' },
        { name: "5. CSE 4309", key: '5' },
        { name: "6. SWE 4301", key: '6' },
        { name: "7. SWE 4304", key: '7' },
    ];
    return (
        <View>
            <Text style={styles.titleStyle}>Course List: 3rd Semester</Text>
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
        backgroundColor: "#4C5629",
    },
    textStyle: {
        fontSize: 22,
        color: "black",
        marginLeft: 25,
        marginVertical: 10,
    },
});

export default ThirdSemesterScreen;