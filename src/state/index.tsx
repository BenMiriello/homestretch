import React, { createContext, useContext, useState } from 'react';

export interface GoalType {
  name: string;
  timesPerWeek: number;
  weekdays: string;
  shared: boolean;
  anyDay: boolean;
};

export interface StateContextType {
  goalName: string;
  setGoalName: React.Dispatch<string>;
  currentGoal: GoalType;
  setCurrentGoal: React.Dispatch<GoalType | null>;
  saveGoalToDb: (g: GoalType) => Promise<GoalType>;
};

export const StateContext = createContext<StateContextType>(null!);

export const AppStateProvider = (props: React.PropsWithChildren<{}>) => {
  const [goalName, setGoalName] = useState('');
  const [currentGoal, setCurrentGoal] = useState<GoalType | null>();

  const saveGoalToDb = (newGoal: GoalType) => {
    setGoalName('');
    return new Promise((resolve) => setTimeout(() => resolve(newGoal), 500));
  };

  const contextValue = {
    goalName,
    setGoalName,
    currentGoal,
    setCurrentGoal,
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
