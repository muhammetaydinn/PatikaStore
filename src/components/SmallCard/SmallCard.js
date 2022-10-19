import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './SmallCard.style';
const SmallCard = ({products}) => {
  return (
    <TouchableOpacity style={[products.id==10 ? styles.last_item_container : styles.container]}>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
      <Image style={[products.id==10 ? styles.last_item_image : styles.image]} source={{uri: products.imgURL}} />
        </View>
      <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        <Text style={styles.not_in_stock}>{!(products.inStock)?"STOKTA YOK":""}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SmallCard;