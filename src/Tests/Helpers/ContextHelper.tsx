import React from 'react';

import { FirebaseContext } from '@context/FirebaseContext';
import { app, db } from '@utils/Firebase';

export const renderWithContext = (component: React.ReactNode, contextProp = { app, db }) => {
  return <FirebaseContext.Provider value={contextProp}>{component}</FirebaseContext.Provider>;
};
