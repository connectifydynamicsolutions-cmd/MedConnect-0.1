import React from 'react';
import Screen from '../components/Screen';
import Placeholder from '../components/Placeholder';

export default function ClinicalInsightsScreen() {
  return (
    <Screen>
      <Placeholder title="Clinical Insights" route="/clinical-insights" source="src/pages/ClinicalInsights.jsx" />
    </Screen>
  );
}
