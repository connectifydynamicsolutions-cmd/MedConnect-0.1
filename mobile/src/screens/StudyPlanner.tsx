import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function StudyPlannerScreen() {
  return (
    <Screen>
      <Placeholder title="Study Planner" route="/planner" source="src/pages/StudyPlanner.jsx" />
    </Screen>
  );
}
