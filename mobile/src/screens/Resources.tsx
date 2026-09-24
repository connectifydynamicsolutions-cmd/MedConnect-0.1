import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function ResourcesScreen() {
  return (
    <Screen>
      <Placeholder title="Resources" route="/resources" source="src/pages/Resources.jsx" />
    </Screen>
  );
}
