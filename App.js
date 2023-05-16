import { Text, View, TextInput, Pressable, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <SafeAreaView>
      <Welcome />
    </SafeAreaView>
  );
}
