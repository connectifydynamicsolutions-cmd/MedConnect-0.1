import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function AboutScreen() {
  return (
    <Screen>
      <Placeholder title="About MedConnect" route="/about" source="src/pages/About.jsx" />
    </Screen>
  );
}
