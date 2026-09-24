import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function ChatScreen() {
  return (
    <Screen>
      <Placeholder title="Chat" route="/chat" source="src/pages/Chat.jsx" />
    </Screen>
  );
}
