import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function LabValuesScreen() {
  return (
    <Screen>
      <Placeholder title="Lab Values" route="/labs" source="src/pages/LabValues.jsx" />
    </Screen>
  );
}
