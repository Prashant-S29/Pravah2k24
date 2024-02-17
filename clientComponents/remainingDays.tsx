import React, { useState, useEffect, useCallback } from "react";

const FutureDateTimer = ({ futureDate }) => {
  const calculateRemainingTime = useCallback(() => {
    const today = new Date();
    const future = new Date(futureDate);
    const difference = future.getTime() - today.getTime();

    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
    );

    return { weeks, days };
  }, [futureDate]);

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const calculateAndSetRemainingTime = () => {
      setRemainingTime(calculateRemainingTime());
    };

    const interval = setInterval(calculateAndSetRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [calculateRemainingTime]);

  return (
      <p>
        {remainingTime.weeks} weeks {remainingTime.days} days to go
      </p>
  );
};

export default FutureDateTimer;
