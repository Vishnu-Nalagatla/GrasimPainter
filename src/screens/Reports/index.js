import { ScrollView } from 'native-base';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import SwithcButtons from '../../components/SwithcButtons';
import Accordion from 'react-native-collapsible/Accordion';
import styles from './styles';
import upImg from '../../assets/images/splash/upload.png';
import downImg from '../../assets/images/splash/down.png';

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
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
      {
        name: 'Wall 2',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
      {
        name: 'Wall 3',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
    ]
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
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
      {
        name: 'Wall 2',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
      {
        name: 'Wall 3',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
    ]
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
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
      {
        name: 'Wall 2',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
      {
        name: 'Wall 3',
        paintingSystem: [
          'FS Premium  Emulsion (Acry P)',
          'Birla White Wall Care Putty',
        ],
        addOns: [
          'Water Proofing',
          'Design Finish',
        ]
      },
    ]
  }
]


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
      const { id } = button;
      if (event.id === id && !event.status) {
        button.status = true;
      } else {
        button.status = false;
      }
      return button;
    });
    setTabState(buttonsChanged);
  };

  const renderHeader = (wall) => {
    return (
      <View style={styles.wallContainer}>
        <Text style={styles.roomName}>{wall.name}</Text>
        <Image source={downImg} style={styles.accordionImg} />
      </View>
    )
  }

  const renderContent = (wall) => {
    return (
      <View style={[styles.wallContainer, styles.wallDetailsContainer]}>
        <Text style={styles.roomName}>{wall.name}</Text>
        <Text style={[styles.roomName, styles.marginStyle]}>Painting System</Text>
        <View style={styles.separator} />
        <Text style={[styles.roomName, styles.marginStyle]}>Add Ons</Text>
        <View style={styles.separator} />
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bodyContainer}>
        <SwithcButtons buttons={state} onClick={onClick} />
        <View style={styles.accordionContainer}>
          <Text style={styles.heading}>Product and Colors</Text>
          <View>
            <Accordion
              activeSections={activeRooms}
              sections={roomsData[0].walls}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeader}
              renderContent={renderContent}
              expandMultiple={multipleSelect}
              onChange={(data) => {
                setActiveRooms(data);
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Reports;