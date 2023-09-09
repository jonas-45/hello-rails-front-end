import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const theState = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(getRandomGreeting());
  };

  return (
    <div>
      <h2>Random Greeting</h2>
      <p className="greeting">{theState.message}</p>
      <button type="button" onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Greeting;
