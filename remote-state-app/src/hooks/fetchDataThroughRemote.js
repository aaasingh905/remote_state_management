import React, { useEffect } from 'react';
import useApiStore from '../store';

function fetchDataThroughRemote({
  apiId,
  fetchApiHandler
}) {
  
  const isRequestOngoing = useApiStore((state) => state.isRequestOngoing(apiId));
  console.log('isRequestOngoing===>', isRequestOngoing)
  fetchApiHandler()
}

export default fetchDataThroughRemote;
