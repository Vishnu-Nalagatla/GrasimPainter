import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  bodyContainer: {
    width: '90%',
    backgroundColor: colors.white,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 80 * vh,
    borderRadius: 26 * vh,
    padding: 40 * vh,
  },
  label: {
    color: 'rgba(0, 0, 0, 0.6);',
    fontSize: 48 * vh,
    fontWeight: '600',
    marginBottom: 70 * vh,
  },
  projectInfo: {
    width: '100%',
    backgroundColor: colors.sliderTrack,
    flexDirection: 'row',
    paddingVertical: 20 * vh,
    borderRadius: 20 * vh,
    paddingHorizontal: 40 * vh,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectId: {
    color: colors.black,
    fontWeight: '600',
    marginLeft: 50 * vh,
  },
  projectName: {
    color: colors.black,
    fontWeight: '600',
  },
  projectIdRow: {
    flexDirection: 'row',
    marginRight: 60 * vh,
    alignItems: 'center',
  },
  hrLine: {
    borderColor: '#E7EBF6',
    borderBottomWidth: 4 * vh,
    marginVertical: 32 * vh,
  },
  addressinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  locationIcon: {
    height: 60 * vh,
    width: 60 * vw,
    margin: 30 * vh,
  },
  address: {
    fontSize: 38 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
