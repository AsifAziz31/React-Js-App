import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FacultyListScreen = () => {
    const facultyList = [
        { name: "1. Professor Dr. Muhammad Mahbub Alam", key: '1' },
        { name: "2. Professor Dr. Md. Hasanul Kabir", key: '2' },
        { name: "3. Mohayeminul Islam", key: '3' },
        { name: "4. Tajkia Rahman Toma", key: '4' },
        { name: "5. Faisal Hussain", key: '5' },
        { name: "6. Ridwan Kabir", key: '6' },
        { name: "7. Bakhtiar Hasan", key: '7' },
        { name: "8. Shohel Ahmed", key: '8' },
        { name: "9. Tasnim Ahmed", key: '9' },
        { name: "10. Shahriar Ivan", key: '10' },
    ];
    return (
        <View>
            <Text style={styles.titleStyle}>FACULTY LIST</Text>
            <FlatList
                style={styles.ListStyle}
                data={facultyList}
                renderItem={function ({ item }) {
                    return <Text style={styles.listTextStyle}>{item.name}</Text>;
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
        backgroundColor: "#5B5FE9",
    },
    listTextStyle: {
        fontSize: 22,
        color: "black",
        marginLeft: 25,
        marginVertical: 8,
    },
});

export default FacultyListScreen;