import {ScrollView} from 'native-base';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import SwitchButtons from '../../components/SwitchButtons';
import Accordion from 'react-native-collapsible/Accordion';
import styles from './styles';
import crackImage from '../../assets/images/wallCrack/image.png';
import downImg from '../../assets/images/splash/down.png';
import moistureImg from '../../assets/images/moisture/image.png';



const roomsData = [
  {
    name: 'Namita Bedroom',
    walls: [
      {
        name: 'Wall 1',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 2',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 3',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 4',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 5',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
    ],
  },
  {
    name: 'Living Room',
    walls: [
      {
        name: 'Wall 1',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 2',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 3',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
    ],
  },
  {
    name: 'Kitchen',
    walls: [
      {
        name: 'Wall 1',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 2',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 3',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 4',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 5',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 6',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
      {
        name: 'Wall 7',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: ['Water Proofing', 'Design Finish'],
      },
    ],
  },
];

const Reports = () => {
  const buttons = [
    {
      label: 'Project Report',
      status: true,
      id: 1,
    },
    {
      id: 2,
      label: 'QC Report',
      status: false,
    },
  ];

  const [state, setTabState] = useState(buttons);
  const [activeRooms, setActiveRooms] = useState([]);
  const [multipleSelect, setMultipleSelect] = useState(false);

  const onClick = event => {
    const buttonsChanged = state.map(button => {
      const {id} = button;
      if (event.id === id && !event.status) {
        button.status = true;
      } else {
        button.status = false;
      }
      return button;
    });
    setTabState(buttonsChanged);
  };

  const renderHeader = wall => {
    const {name} = wall;
    const index = name.split(' ')[1];
    const activeRoom = activeRooms[0] + 1;
    const isActiveRoom = +index === +activeRoom;
    return (
      <View
        style={
          isActiveRoom ? styles.activeHeaderContainer : styles.headerContainer
        }>
        <Text style={styles.roomName}>{wall.name}</Text>
        <Image source={downImg} style={styles.accordionImg} />
      </View>
    );
  };

  const renderContent = wall => {
    const {name} = wall;
    const index = name.split(' ')[1];
    const activeRoom = activeRooms[0] + 1;
    const isActiveRoom = +index === +activeRoom;
    const wallStyles = isActiveRoom
      ? styles.activeWallContainer
      : styles.wallContainer;
    const paintingSystem = [
      'FS Premium Emulsion (Acry P)',
      'Birla White Wall Care Putty',
    ];
    const addOns = ['Water Proofing', 'Design Finish'];
    const wallInfo = ['Water Proofing', 'Design Finish'];
    return (
      <View style={[wallStyles, styles.wallDetailsContainer]}>
        <Text style={[styles.paintingSystem, styles.marginStyle]}>
          Painting System
        </Text>
        {paintingSystem.map(item => (
          <Text style={styles.infoKey}>{item}</Text>
        ))}
        <View style={styles.separator2} />
        <Text style={[styles.paintingSystem, styles.marginStyle]}>Add Ons</Text>
        {addOns.map(item => (
          <Text style={styles.infoKey}>{item}</Text>
        ))}
        <View style={styles.separator2} />
        <View style={styles.colorWrapper}>
          <View style={styles.colorWrapper}>
            <View style={styles.wallColor} />
            <View>
              <Text style={styles.extraInfo}>{'Color Primary'}</Text>
              <Text style={styles.extraInfo2}>{'Placid Blue - N'}</Text>
              <Text style={styles.extraInfo2}>{'9637'}</Text>
            </View>
          </View>
          <View style={styles.cracksWrapper}>
            <Image source={crackImage} style={styles.crackImage} />
            <Text style={styles.cracksInfo}>{'Cracks Present'}</Text>
          </View>
          <View style={styles.cracksWrapper}>
            <Image source={moistureImg} style={styles.crackImage} />
            <Text style={styles.cracksInfo}>{'Contains Dampness'}</Text>
          </View>
        </View>
      </View>
    );
  };

  const RoomInfo = ({room}) => {
    console.info('room...', room);
    const {name} = room;
    return (
      <View>
        <Text style={styles.roomInfo}>{name}</Text>
        <View>
          <Accordion
            activeSections={activeRooms}
            sections={room.walls}
            touchableComponent={TouchableOpacity}
            renderHeader={renderHeader}
            renderContent={renderContent}
            expandMultiple={multipleSelect}
            onChange={data => {
              setActiveRooms(data);
            }}
          />
          <View style={styles.separator} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <SwitchButtons buttons={state} onClick={onClick} />
        <ScrollView style={styles.accordionContainer}>
          <Text style={styles.heading}>Product and Colors</Text>
          {roomsData.map(room => {
            return <RoomInfo room={room} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Reports;
