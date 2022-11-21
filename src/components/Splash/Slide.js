
import { View,Text,StyleSheet, ImageBackground,TouchableOpacity } from "react-native"; 
import { COLORS ,height,slides, width} from "../../utils/data";

const Slide = ({item, currentSlideIndex,navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, width: width}}>
        <ImageBackground
          source={item?.image}
          style={{justifyContent: 'flex-end', flex: 1}}
          resizeMode="cover">
          <View style={{height: height * 0.5}}>
            <View style={{flex: 0.8}}>
              <Text style={styles.title}>{item?.title}</Text>
              <View style={{alignItems:'center'}}>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                {slides.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.indicator,
                      currentSlideIndex == index && {
                        backgroundColor: COLORS.white,
                        width: 25,
                      },
                    ]}
                  />
                ))}
              </View>
            </View>
            <View style={{bottom: 0, flex: 0.2}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('LoginScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'blue'}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Slide;
