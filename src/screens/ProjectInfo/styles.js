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
    width: 328 * vw,
    backgroundColor: colors.white,
    marginTop: 22 * vh,
    borderRadius: 8 * vh,
    padding: 16 * vh,
  },
  label: {
    color: 'rgba(0, 0, 0, 0.6);',
    fontSize: 16 * vh,
    fontWeight: '600',
    marginBottom: 24 * vh,
  },
  projectInfo: {
    width: '100%',
    backgroundColor: colors.sliderTrack,
    flexDirection: 'row',
    paddingVertical: 12 * vh,
    borderRadius: 8 * vh,
    paddingHorizontal: 12 * vh,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectId: {
    color: colors.black,
    fontWeight: '600',
    marginLeft: 12 * vh,
    fontSize: 12 * vh,
  },
  projectName: {
    color: colors.black,
    fontWeight: '600',
    marginRight: 8 * vh,
  },
  projectIdRow: {
    flexDirection: 'row',
    marginRight: 24 * vh,
    alignItems: 'center',
  },
  hrLine: {
    borderColor: '#E7EBF6',
    borderBottomWidth: 1 * vh,
    marginVertical: 12 * vh,
  },
  addressinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  multiple: {
    width: 16 * vw,
    height: 16 * vh,
  },
  locationIcon: {
    height: 22 * vh,
    width: 16 * vw,
    Left: 4 * vw,
    marginRight: 17 * vh,
  },
  address: {
    fontSize: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

export default styles;
