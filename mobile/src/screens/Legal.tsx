import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function LegalScreen() {
  return (
    <Screen>
      <Placeholder title="Privacy & Terms" route="/legal" source="src/pages/Legal.jsx" />
    </Screen>
  );
}
