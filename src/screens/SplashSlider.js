import React from 'react';
import {FlatList,View} from 'react-native';
import {slides, width, height} from '../utils/data';
import Slide from '../components/Splash/Slide';

const SplashSlider = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => (
          <Slide
            item={item}
            currentSlideIndex={currentSlideIndex}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default SplashSlider;
