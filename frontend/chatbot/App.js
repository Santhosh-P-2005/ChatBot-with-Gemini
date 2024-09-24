import React from 'react';
import { SafeAreaView } from 'react-native';
import Chatbot from './chatbot';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Chatbot />
    </SafeAreaView>
  );
};

export default App;
