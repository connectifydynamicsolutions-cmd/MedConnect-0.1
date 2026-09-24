import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function AddPartnerScreen() {
  return (
    <Screen>
      <Placeholder title="Add Partner" route="/add/:id" source="src/pages/AddPartner.jsx" />
    </Screen>
  );
}
