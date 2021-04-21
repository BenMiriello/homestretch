import React, { createContext, useContext, useState } from 'react';

export interface StateContextType {
  goalName: string;
  setGoalName: React.Dispatch<string>;
};

export const StateContext = createContext<StateContextType>(null!);

export const AppStateProvider = (props: React.PropsWithChildren<{}>) => {
  const [goalName, setGoalName] = useState('');

  const contextValue = {
    goalName,
    setGoalName,
  } as StateContextType;

  return <StateContext.Provider value={contextValue}>{props.children}</StateContext.Provider>;
};

export default function useAppState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppStateProvider');
  }
  return context;
};
