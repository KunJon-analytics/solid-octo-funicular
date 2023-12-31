"use client";

import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTimeRemaining = (e: number) => {
    const now = new Date();
    const total = e - Math.floor(now.getTime() / 1000);
    const seconds = Math.floor(total % 60);
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / 60 / 60) % 24);
    const days = Math.floor((total / 60 / 60 / 24) % 30);
    return {
      total,
      hours,
      minutes,
      seconds,
      days,
    };
  };

  useEffect(() => {
    const startTimer = (e: number) => {
      let { total, hours, minutes, seconds, days } = getTimeRemaining(e);
      if (total >= 0) {
        setTimer((prev) => {
          return { ...prev, hours, minutes, seconds, days };
        });
      }
    };

    const interval = setInterval(() => {
      startTimer(1699862400);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max -mt-5">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl lg:text-5xl">
          <span style={{ "--value": timer.days } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl lg:text-5xl">
          <span
            style={{ "--value": timer.hours } as React.CSSProperties}
          ></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl lg:text-5xl">
          <span
            style={{ "--value": timer.minutes } as React.CSSProperties}
          ></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl lg:text-5xl">
          <span
            style={{ "--value": timer.seconds } as React.CSSProperties}
          ></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
