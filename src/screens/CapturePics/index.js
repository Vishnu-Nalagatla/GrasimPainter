import React, { useRef, useState } from 'react';
import {
    Image,
    NativeTouchEvent,
    View,
    TouchableOpacity,
} from 'react-native';
import { Text } from 'native-base';
import CustomButton from '../../components/Button';

import {
    Camera,
    useCameraDevices,
    Point,
} from 'react-native-vision-camera';
import styles from './styles';

const CapturePics = ({ navigation, route }: any) => {
    const [hasPermission, setHasPermission] = useState(false);
    const [isPhotoCaptured, setIsPhotoCaptured] = useState(false);
    const [imagePath, setImagePath] = useState([]);
    const devices = useCameraDevices();
    const device = devices.back;
    const camera = useRef(null);
    const takePhotoOptions = {
        qualityPrioritization: 'quality',
        quality: 0.1,
        skipMetadata: true,
    };

    const { updateImageList, id } = route.params;

    const onPhotoCapture = async () => {
        try {
            console.log('photo taking', camera);
            const photo = await camera.current.takePhoto(takePhotoOptions);
            console.log(photo, 'photo path url');
            const updatedPaths = imagePath;
            updatedPaths.push(photo.path)
            setImagePath(updatedPaths);
            setIsPhotoCaptured(true);
            console.log(photo.path);
            console.log(photo);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            console.log(status, 'status');
            setHasPermission(status === 'authorized');
        })();
    }, []);

    const [camLocation, setCamLocation] = useState({
        x: 0,
        y: 0,
    });

    const touchII = async (event: NativeTouchEvent) => {
        let point: Point = {
            x: Math.round(event.pageX - camLocation.x),
            y: Math.round(event.pageY - camLocation.y),
        };
        console.log(point);

        await camera?.current
            ?.focus(point)
            .then(() => {
                console.log('Focus succeeded');
            })
            .catch(reason => {
                console.log('Focus failed!', reason);
            });
    };
    console.log('imagePath', imagePath);
    return (
        <View style={styles.container}>
            {device != null && hasPermission && !isPhotoCaptured && (
                <>
                    <Camera
                        ref={camera}
                        enablePortraitEffectsMatteDelivery
                        enableZoomGesture
                        style={{
                            height: '88%',
                        }}
                        onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            setCamLocation({ x: layout.x, y: layout.y });
                        }}
                        onTouchEnd={x => device.supportsFocus && touchII(x.nativeEvent)}
                        device={device}
                        isActive={true}
                        photo={true}
                    />
                </>
            )}
            {isPhotoCaptured && (
                <>
                    <Image
                        source={{ isStatic: true, uri: `file://${imagePath[imagePath.length - 1]}` }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </>
            )}
            {isPhotoCaptured ? (<View style={styles.innerContainer}>
                <CustomButton
                    title="Take More"
                    onPress={() => setIsPhotoCaptured(false)}
                    style={styles.btn}
                    textStyle={styles.btnText}
                />
                <CustomButton
                    title="Done"
                    style={styles.btn}
                    textStyle={styles.btnText}
                    onPress={() => {
                        updateImageList(imagePath, id);
                        navigation.goBack();
                    }}
                />
            </View>) : (
                <TouchableOpacity onPress={onPhotoCapture} style={styles.capture}>
                    <Text style={[styles.btnText, styles.captureText]}>Capture</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CapturePics;
