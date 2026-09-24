import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function HomeScreen() {
  return (
    <Screen>
      <Placeholder title="Home" route="/home" source="src/pages/Home.jsx" />
    </Screen>
  );
}
