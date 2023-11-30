import { StyleSheet, Text, View } from "react-native";

export default function List({data}){
    return(
        <View style={styles.container}>
            <Text>{data.nome}</Text>
            <Text>{data.idade}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
        width: 300,
        height: 80,
        backgroundColor: '#e5e5e5',
        padding: 15,
        justifyContent: 'space-between',
        borderRadius: 10
    }
})