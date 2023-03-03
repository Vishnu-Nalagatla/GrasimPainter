import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  dropdown: {
    width: 90 * vw,
    height: 26 * vh,
    backgroundColor: '#2C4DAE',
    borderRadius: 8 * vh,
    position: 'absolute',
    right: 0,
    marginTop: 20 * vh,
  },
  totalProjects: {
    marginLeft: 16 * vw,
    marginTop: 24 * vh,
    fontFamily: 'Lato-Bold',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    letterSpacing: 0.25 * vw,
    color: '#000000',
  },
  item: {
    width: 138 * vw,
    height: 46 * vh,
    backgroundColor: '#F5F8FF',
    flexDirection: 'row',
  },
  textStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    letterSpacing: 0.25 * vw,
    color: '#000000',
    opacity: 0.6,
    marginBottom: 12 * vh,
    marginLeft: 12 * vw,
  },
  checkImg: {
    width: 24 * vw,
    height: 24 * vh,
    position: 'absolute',
    right: 24 * vw,
  },
  cardContainer: {
    width: 328 * vw,
    height: 66 * vh,
    borderRadius: 10 * vh,
    backgroundColor: '#FFFFFF',
    marginBottom: 12 * vh,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 24 * vh,
    flexDirection: 'row',
    width: 328 * vw,
    alignSelf: 'center',
  },
  projectImg: {
    width: 96 * vw,
    height: 50 * vh,
    borderRadius: 8 * vh,
    marginLeft: 8 * vw,
    marginRight: 12 * vw,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    width: 224 * vw,
  },
  statusContainer: {
    width: 78 * vw,
    height: 20 * vh,
    backgroundColor: '#70B39D',
    borderRadius: 15 * vh,
    position: 'absolute',
    right: 20 * vw,
    paddingVertical: 2 * vh,
  },
  status: {
    fontFamily: 'Karla-Bold',
    fontSize: 12 * vh,
    letterSpacing: 0.25 * vw,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  flagImg: {
    width: 16 * vw,
    height: 16 * vh,
    marginRight: 6 * vw,
  },
  endText: {
    fontFamily: 'Karla-Bold',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    letterSpacing: 0.25 * vw,
    color: '#000000',
    opacity: 0.6,
  },
  placeholder: {
    fontFamily: 'Lato-Bold',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    letterSpacing: 0.25 * vw,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  flaskImg: {
    width: 16 * vw,
    height: 16 * vh,
    marginRight: 10 * vw,
  }
});

export default styles;
