import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sliderTrack,
    // alignItems: 'center',
    // marginBottom: 24 * vh,
  },
  crewContainer: {
    marginTop: 24 * vh,
    // backgroundColor: colors.error,
  },
  labelWrapper: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16 * vh,
    // backgroundColor: 'red',
  },
  crewTitle: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    color: colors.black,
    paddingLeft: 17 * vh,
  },
  status: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  hrLine: {
    width: 251 * vh,
    borderColor: '#A2ABC4',
    borderBottomWidth: 1 * vh,
    marginLeft: 8 * vh,
    alignSelf: 'center',
  },
  hrLineO: {
    width: 142 * vh,
    borderColor: '#A2ABC4',
    borderBottomWidth: 1 * vh,
    marginHorizontal: 8 * vh,
    alignSelf: 'center',
  },
  crewCard: {
    width: 328 * vw,
    height: 127 * vh,
    borderRadius: 8 * vh,
    backgroundColor: colors.white,
    marginLeft: 15 * vh,
    marginBottom: 16 * vh,
    paddingLeft: 8 * vh,
    paddingTop: 8 * vh,
  },
  crewImg: {
    width: 96 * vw,
    height: 72 * vh,
    borderRadius: 4 * vh,
    backgroundColor: 'red',
    marginRight: 12 * vw,
  },
  title: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    marginBottom: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  crewCalendarLabel: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    color: colors.primary,
    textDecorationLine: 'underline',
    marginLeft: 10 * vw,
  },
  calendarImg: {
    width: 13 * vw,
    height: 13 * vh,
    marginRight: 7 * vw,
  },
  crewInfo: {
    flexDirection: 'row',
  },
  crewAvailablity: {
    flexDirection: 'row',
  },
  availablitylabel: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10 * vh,
    lineHeight: 12 * vh,
    paddingLeft: 22 * vw,
    marginTop: 4 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  skillsWrapper: {
    flexDirection: 'row',
  },
  skill: {
    paddingHorizontal: 12 * vw,
    paddingVertical: 6 * vh,
    backgroundColor: colors.carteBlanche,
    marginRight: 12 * vw,
    borderRadius: 8 * vh,
    marginTop: 12 * vh,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
