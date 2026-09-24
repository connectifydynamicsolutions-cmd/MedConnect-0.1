import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function ProScreen() {
  return (
    <Screen>
      <Placeholder title="MedConnect Pro" route="/pro" source="src/pages/Pro.jsx" />
    </Screen>
  );
}
