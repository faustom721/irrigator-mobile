import {
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function FieldCard({ field }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <ImageBackground
          source={require('../../assets/170920-growing-tomatoes.jpg')}
          style={styles.imageBg}
          imageStyle={{ borderRadius: 6 }}
        >
          <Text style={styles.title}> {field.name}</Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoText}>Regado por última vez ayer</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 140,
    marginHorizontal: 8,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    color: 'white',
  },
  imageBg: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 25,
    position: 'absolute',
    bottom: 8,
  },
  infoWrapper: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textShadowColor: 'black',
    textShadowRadius: 25,
  },
  borderWidth: 1,
  borderRadius: 10,
});
