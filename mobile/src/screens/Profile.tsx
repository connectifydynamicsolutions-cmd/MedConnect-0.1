import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function ProfileScreen() {
  return (
    <Screen>
      <Placeholder title="Profile" route="/profile" source="src/pages/Profile.jsx" />
    </Screen>
  );
}
