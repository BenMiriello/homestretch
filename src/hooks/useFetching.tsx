import React, { useState } from 'react';

export default function useFetching(): [fetching: boolean, setFetching: React.Dispatch<boolean>] {
  const [fetching, setFetching] = useState(false);
  return [fetching, setFetching];
};
