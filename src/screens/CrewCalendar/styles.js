import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: colors.white,
    width: 328 * vw,
    height: 572 * vh,
    margin: 16 * vh,
    borderRadius: 8 * vh,
    paddingRight: 16 * vh,
    paddingVertical: 16 * vh,
  },
  date: {
    // backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginRight: 36 * vw,
  },
  ellipse: {
    height: 24 * vh,
    width: 24 * vw,
    marginHorizontal: 12 * vw,
  },
  dayWrapper: {
    flexDirection: 'row',
    marginRight: 29 * vw,
    width: '25%',
  },
  crewWrapper: {
    flexDirection: 'row',
  },
  gestureWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: 40 * vh,
    marginBottom: 23 * vh,
  },
  sraitLine: {
    backgroundColor: '#D0D7E8',
    height: 49 * vh,
    width: 4 * vw,
    position: 'absolute',
    left: 22 * vw,
    top: 22 * vh,
  },
  crewTimeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeLineContainer: {
    marginTop: 0 * vh,
  },
  crewName: {
    width: 37 * vw,
    height: 28 * vh,
    marginRight: 3 * vh,
    paddingTop: 4 * vh,
    backgroundColor: colors.sliderTrack,
    borderRadius: 8 * vh,
    fontSize: 12 * vh,
    textAlign: 'center',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  timeLine: {
    flexDirection: 'row',
  },
  timeLineView: {
    width: 28 * vw,
    height: 71 * vh,
    marginHorizontal: 6 * vh,
  },
  timeLineRowFirst: {
    width: 12 * vw,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    height: 71 * vh,
    borderRadius: 8 * vh,
  },
  timeLineRowLast: {
    width: 12 * vw,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    height: 71 * vh,
    borderRadius: 8 * vh,
  },
  timeLineRow: {
    width: 12 * vw,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    height: 71 * vh,
    // borderRadius: 8 * vh,
  },
  timeLineNotOccupied: {
    width: 12 * vw,
    backgroundColor: colors.sliderTrack,
    alignSelf: 'center',
    height: 71 * vh,
    // borderRadius: 8 * vh,
  },
  timeLineRowInActive: {
    width: 12 * vw,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    height: 221 * vh,
    position: 'relative',
    // borderRadius: 8 * vh,
  },
  timeLineRowLeave: {
    position: 'absolute',
    backgroundColor: colors.yellow,
    width: 12 * vw,
    height: 22 * vh,
    // borderRadius: 8 * vh,
  },
});

export default styles;
