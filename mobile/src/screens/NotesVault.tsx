import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function NotesVaultScreen() {
  return (
    <Screen>
      <Placeholder title="Notes Vault" route="/notes" source="src/pages/NotesVault.jsx" />
    </Screen>
  );
}
