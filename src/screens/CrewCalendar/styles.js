import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: colors.white,
    width: '92%',
    margin: '6%',
    borderRadius: 26 * vh,
    paddingHorizontal: 50 * vh,
    paddingVertical: 60 * vh,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ellipse: {
    height: 70 * vh,
    width: 70 * vh,
    marginRight: 20 * vw,
  },
  dayWrapper: {
    flexDirection: 'row',
  },
  crewWrapper: {
    flexDirection: 'row',
    // overflow: 'scrool',
  },
  crewTimeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeLineContainer: {
    marginTop: 100 * vh,
  },
  crewName: {
    width: 116 * vw,
    paddingVertical: 10 * vh,
    marginHorizontal: 6 * vh,
    backgroundColor: colors.sliderTrack,
    borderRadius: 22 * vh,
    fontSize: 34 * vh,
    textAlign: 'center',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  timeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100 * vh,
  },
  timeLineView: {
    history: 220 * vh,
    height: 220 * vh,
    width: 116 * vw,
    marginHorizontal: 6 * vh,
  },
  timeLineRowFirst: {
    width: 26 * vw,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    height: 221 * vh,
    // borderRadius: 12 * vh,
  },
  timeLineRowLast: {
    width: 26 * vw,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    height: 221 * vh,
    // borderRadius: 12 * vh,
  },
  timeLineRow: {
    width: 26 * vw,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    height: 221 * vh,
  },
  timeLineNotOccupied: {
    width: 26 * vw,
    backgroundColor: colors.sliderTrack,
    alignSelf: 'center',
    height: 221 * vh,
  },
  timeLineRowInActive: {
    width: 26 * vw,
    color: 'red',
    backgroundColor: colors.primary,
    alignSelf: 'center',
    height: 221 * vh,
    position: 'relative',
  },
  timeLineRowLeave: {
    position: 'absolute',
    backgroundColor: colors.yellow,
    // borderRadius: 8 * vh,
    width: 26 * vw,
    height: 60 * vh,
  },
});

export default styles;
