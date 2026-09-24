import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function MotivationScreen() {
  return (
    <Screen>
      <Placeholder title="Motivation" route="/motivation" source="src/pages/Motivation.jsx" />
    </Screen>
  );
}
