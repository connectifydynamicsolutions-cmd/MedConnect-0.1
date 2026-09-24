import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function FlashcardsScreen() {
  return (
    <Screen>
      <Placeholder title="Flashcards" route="/flashcards" source="src/pages/Flashcards.jsx" />
    </Screen>
  );
}
