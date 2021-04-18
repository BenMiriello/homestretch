import React, { createContext, useContext, useState } from 'react';

import { TimesPerWeek, AnyDay, Weekdays } from '../../types';

export interface StateContextType {
  goalName: string;
  setGoalName: React.Dispatch<string>;
  timesPerWeek: TimesPerWeek;
  setTimesPerWeek: React.Dispatch<TimesPerWeek>;
  anyDay: AnyDay;
  setAnyDay: React.Dispatch<AnyDay>;
  weekdays: Weekdays;
  setWeekdays: React.Dispatch<Weekdays>;
  shared: boolean;
  setShared: React.Dispatch<boolean>;
};

export const StateContext = createContext<StateContextType>(null!);

export const AppStateProvider = (props: React.PropsWithChildren<{}>) => {
  const [goalName, setGoalName] = useState('');
  const [timesPerWeek, setTimesPerWeek] = useState<TimesPerWeek>(1);
  const [anyDay, setAnyDay] = useState<AnyDay>(true);
  const [weekdays, setWeekdays] = useState<Weekdays | null>(null);
  const [shared, setShared] = useState<boolean>(true);

  const contextValue = {
    goalName,
    setGoalName,
    timesPerWeek,
    setTimesPerWeek,
    anyDay,
    setAnyDay,
    weekdays,
    setWeekdays,
    shared,
    setShared,
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
