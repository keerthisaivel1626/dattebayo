import { Dimensions } from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
export const {width, height} = Dimensions.get('window');

export const COLORS = {primary: 'blue', white: '#fff'};



export const VERY_SMALL = RFPercentage(1.8);
export const SMALL = RFPercentage(2.5);
export const REGULAR = RFPercentage(4);
export const MEDIUM = RFPercentage(4.5);
export const BIG = RFPercentage(5);


export const VERY_SMALL_VERTICAL_SPACE = hp(2);
export const SMALL_VERTICAL_SPACE = hp(3);
export const MEDIUM_SMALL_VERTICAL_SPACE = hp(3.5);
export const MEDIUM_VERTICAL_SPACE=hp(4)
export const REGULAR_VERTICAL_SPACE = hp(5);
export const BIG_VERTICAL_SPACE = hp(10);

export const SMALL_HORIZONTAL_SPACE = hp(3);
export const REGULAR_HORIZONTAL__SPACE = hp(5);
export const BIG_HORIZONTAL__SPACE = hp(10);

export const slides = [
  {
    id: '1',
    image: require('../assets/photo1.webp'),
    title: 'naruto',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../assets/photo4.jpg'),
    title: 'life of pie',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../assets/photo2.webp'),
    title: 'bebelieve it',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
