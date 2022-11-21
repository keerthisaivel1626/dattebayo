import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image,
  ImageBackground,
} from 'react-native';

const images = [
  {
    id: 1,
    img: require('./src/assets/photo1.webp'),
    title: 'Beautiful Coral Reef',
    color: '#33ccff',
  },
  {
    id: 2,
    img: require('./src/assets/photo2.webp'),
    title: 'Beautiful Sea Wave',
    color: 'brown',
  },

  {
    id: 3,
    img: require('./src/assets/photo3.jpg'),
    title: 'Ice Galcier Mystery',
    color: '#33ccff',
  },
  {
    id: 4,
    img: require('./src/assets/photo4.jpg'),
    title: 'Wonderful Jelly fish Group',
    color: '#33ccff',
  },

  {
    id: 5,
    img: require('./src/assets/photo5.webp'),
    title: 'Fresh Sea Water',
    color: '#33ccff',
  },
  {
    id: 6,
    img: require('./src/assets/photo6.webp'),
    title: 'Sea the Universe',
    color: 'brown',
  },
];

export default App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  let {width: windowWidth, height: windowHeight} = useWindowDimensions();
  // windowHeight = windowHeight - 300;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textAreaContainer}>
        {images.map((image, imageIndex) => {
          const inputRange = [
            windowWidth * (imageIndex - 1),
            windowWidth * imageIndex,
            windowWidth * (imageIndex + 1),
          ];
          return (
            <Animated.Text
              style={[
                styles.textView,
                {
                  transform: [
                    {
                      translateY: scrollX.interpolate({
                        inputRange,
                        outputRange: [-500, -50, 0],
                      }),
                    },
                  ],
                },
                {
                  opacity: scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                  }),
                },
                {
                  color: image.color,
                },
              ]}
              key={imageIndex}>
              {image.title}
            </Animated.Text>
          );
        })}
      </View>
      <View style={[styles.scrollContainer, {height: windowHeight}]}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}>
          {images.map((image, imageIndex) => {
            return (
              <Animated.View
                style={{width: windowWidth, flex: 1}}
                key={imageIndex}>
                <ImageBackground source={image.img} style={styles.card}>
                  <View style={styles.indicatorContainer}>
                    {images.map((image, imageIndex) => {
                      const width = scrollX.interpolate({
                        inputRange: [
                          windowWidth * (imageIndex - 1),
                          windowWidth * imageIndex,
                          windowWidth * (imageIndex + 1),
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: 'clamp',
                      });

                      return (
                        <Animated.View
                          style={[
                            styles.normalDots,
                            {width},
                            {backgroundColor: image.color},
                          ]}
                          key={imageIndex}
                        />
                      );
                    })}
                  </View>
                </ImageBackground>
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  scrollContainer: {
    shadowColor: '#6A6C6E',
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 1,
  },
  card: {
    width: '99.9%',
    overflow: 'hidden',
    resizeMode: 'stretch',
    justifyContent: 'center',
    flex: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  textAreaContainer: {},
  textView: {
    backgroundColor: 'red',
    position: 'absolute',
    fontSize: 22,
    fontFamily: 'Avenir',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
});
