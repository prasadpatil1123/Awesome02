import { View, Text, useColorScheme, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  const isDarkmode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={isDarkmode ? '#000000' : '#FFFFFF'}>
          <ContactList />
          <ActionCard />
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;