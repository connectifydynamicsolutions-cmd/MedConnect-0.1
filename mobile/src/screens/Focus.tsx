import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function FocusScreen() {
  return (
    <Screen>
      <Placeholder title="Focus" route="/focus" source="src/pages/Focus.jsx" />
    </Screen>
  );
}
