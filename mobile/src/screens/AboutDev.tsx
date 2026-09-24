import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function AboutDevScreen() {
  return (
    <Screen>
      <Placeholder title="About the Developer" route="/about-dev" source="src/pages/AboutDev.jsx" />
    </Screen>
  );
}
