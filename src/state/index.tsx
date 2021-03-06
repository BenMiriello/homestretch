import React, { createContext, useContext, useState, useEffect } from 'react';

import useAsyncStorage from '../hooks/asyncStorage';
import { GoalType } from '../utils/types';
import useFetching from '../hooks/useFetching';

import AsyncStorage from "@react-native-community/async-storage";

export interface StateContextType {
  goalName: string;
  setGoalName: React.Dispatch<string>;
  currentGoal: GoalType;
  setCurrentGoal: React.Dispatch<GoalType | null>;
  saveGoal: (g: GoalType) => Promise<GoalType>;
};

export const StateContext = createContext<StateContextType>(null!);

export const AppStateProvider = (props: React.PropsWithChildren<{}>) => {
  const { setNewStoredGoal } = useAsyncStorage();
  const [goalName, setGoalName] = useState('');
  const [currentGoal, setCurrentGoal] = useState<GoalType | null>();
  const [fetching, setFetching] = useFetching();

  const saveGoal = (newGoal: GoalType) => {
    setFetching(true);
    setNewStoredGoal(newGoal);
    setFetching(false);
    return new Promise((resolve) => setTimeout(() => resolve(newGoal), 500));
  };

  const contextValue = {
    goalName,
    setGoalName,
    currentGoal,
    setCurrentGoal,
    saveGoal,
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
