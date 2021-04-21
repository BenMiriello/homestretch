import React, { createContext, useContext, useState } from 'react';

export interface GoalType {
  name: string;
  timesPerWeek: number;
  weekdays: string;
  shared: boolean;
};

export interface StateContextType {
  goalName: string;
  setGoalName: React.Dispatch<string>;
  saveGoalToDb: (g: GoalType) => GoalType;
};

export const StateContext = createContext<StateContextType>(null!);

export const AppStateProvider = (props: React.PropsWithChildren<{}>) => {
  const [goalName, setGoalName] = useState('');
  const saveGoalToDb = (newGoal: GoalType) => {
    // fetch()
    // .then(r => r.json())
    // .then(res => )
    // return res.goal;
    setGoalName('');
    return newGoal;
  };

  const contextValue = {
    goalName,
    setGoalName,
    saveGoalToDb,
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
