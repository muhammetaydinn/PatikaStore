import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, TextInput} from "react-native";
import Products from "./products.json";
import SmallCard from "./components/SmallCard";
const App = () => {
  const [text, setText] = React.useState('');
  const renderProducts = ({ item }) =><SmallCard products={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
        <View style={styles.search_container}>
           <TextInput
              style={styles.search_title}
              onChangeText={setText}
              value={text}
              placeholder="🔍 Search.."
            />
      </View>
      <View style={{height:'1%'}}></View>
      <FlatList  numColumns={2}  columnWrapperStyle={{justifyContent: 'space-between'}}   keyExtractor={(Products)=>Products.id.toString()}
        data={Products} renderItem={renderProducts}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 10,
    marginTop: 10,
  },
  search_container: {
    marginHorizontal:10,
    height: Dimensions.get('window').height * 0.065,
    backgroundColor: '#ECEFF1',
    borderRadius: 15,
    justifyContent: 'center',

  },
  search_title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#B6B8BC',
    marginLeft: 10,
  },


});


export default App;