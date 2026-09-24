import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function ResetScreen() {
  return (
    <Screen>
      <Placeholder title="Reset Password" route="/reset" source="src/pages/Reset.jsx" />
    </Screen>
  );
}
