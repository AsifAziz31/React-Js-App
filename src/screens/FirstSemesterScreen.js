import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FirstSemesterScreen = () => {
    const course_list = [
        { name: "1. HUM 4147", key: '1' },
        { name: "2. CSE 4107", key: '2' },
        { name: "3. SWE 4101", key: '3' },
        { name: "4. Phy 4143", key: '4' },
        { name: "5. CSE 4104", key: '5' },
        { name: "6. HUM 4145", key: '6' },
        { name: "7. HUM 4142", key: '7' },
        { name: "8. MATH 4141", key: '8' },
    ];
    return (
        <View>
            <Text style={styles.titleStyle}>Course List: 1st Semester</Text>
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
        backgroundColor: "#A4BA56",
    },
    textStyle: {
        fontSize: 22,
        color: "black",
        marginLeft: 25,
        marginVertical: 10,
    },
});

export default FirstSemesterScreen;