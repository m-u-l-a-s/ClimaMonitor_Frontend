import {StyleSheet} from 'react-native';
import {themas} from '../../global/themes';

export const style = StyleSheet.create({
  boxInput: {
    width: 140,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    backgroundColor: themas.colors.fundoCards,
    borderColor: '#326B20',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 20,
    color: 'black',
  },

  temp: {
    fontSize: 30,
    marginTop: -4,
    color: 'black',
  },
});
