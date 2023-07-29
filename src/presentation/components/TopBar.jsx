import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import ClockFilled from '../assets/clock_icon_filled.png'
import Clock from '../assets/clock_icon.png'

import PillFilled from '../assets/pill_icon_filled.png'
import Pill from '../assets/pill_icon.png'

import CalendarFilled from '../assets/calendar_icon_filled.png'
import Calendar from '../assets/calendar_icon.png'

import SyncFilled from '../assets/sync_icon_filled.png'
import Sync from '../assets/sync_icon.png'

export default function TopBar({ activeScreen, setActiveScreen }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.topBarItem} onPress={() => { if(activeScreen !== 'today') { setActiveScreen('today') }}}>
        <Image source={activeScreen === 'today' ? ClockFilled : Clock} />
        <Text>Hoje</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.topBarItem} onPress={() => { if(activeScreen !== 'medicines') { setActiveScreen('medicines') }}}>
        <Image source={activeScreen === 'medicines' ? PillFilled : Pill} />
        <Text>Remédios</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.topBarItem} onPress={() => { if(activeScreen !== 'calendar') { setActiveScreen('calendar') }}}>
        <Image source={activeScreen === 'calendar' ? CalendarFilled : Calendar} />
        <Text>Calendário</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.topBarItem} onPress={() => { if(activeScreen !== 'sync') { setActiveScreen('sync') }}}>
        <Image source={activeScreen === 'sync' ? SyncFilled : Sync} />
        <Text>Sincronização</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    height: '84px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
