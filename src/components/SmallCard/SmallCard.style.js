import { View, Text, StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        paddingTop: 10,
        width: '45%',
        height: Dimensions.get('window').height * 0.40,
        borderRadius: 15,
        backgroundColor: '#e6e6e6',
    },
    image: {
        height: Dimensions.get('window').height * 0.27,
        width: Dimensions.get('window').width * 0.4,
        borderRadius: 10,
        alignSelf: 'center',
    },
    title: {
        paddingTop: 5,
        marginLeft: 10,
        width: Dimensions.get('window').width * 0.4,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },
    inner_container: { alignContent: 'center' },
    image_container: { alignContent: 'center',backgroundColor:'white',borderRadius:10,marginHorizontal:10 },
    price: {
        fontSize: 15,
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    not_in_stock: {
        fontSize: 15,
        marginLeft: 10,
        color: 'red',
        fontWeight: 'bold',
    },
    last_item_container: {
        paddingTop: 10,
        width: '95%',
        marginLeft: 10,
        height: Dimensions.get('window').height * 0.40,
        borderRadius: 15,
        backgroundColor: '#e6e6e6',

    },
    last_item_image: {
        height: Dimensions.get('window').height * 0.27,
        borderRadius: 10,
        width: '52%',
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    
});
