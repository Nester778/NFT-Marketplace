import React, { useState, useEffect } from 'react';

import "./timer.css";

export default function Timer(prop) {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(prop.endDate) - now;

        if (difference <= 0) {
            return {
                years: 0,
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            years,
            months,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [prop.endDate]);

    return (
        <div className="highlight__timer-body">
            <p>Auction ends in:</p>
            <div className="highlight__timer">
                <div className="highlight__timer-time">
                    <h3>{timeLeft.years}</h3>
                    <p>Years</p>
                </div>
                <h4>:</h4>
                <div className="highlight__timer-time">
                    <h3>{timeLeft.months}</h3>
                    <p>Months</p>
                </div>
                <h4>:</h4>
                <div className="highlight__timer-time">
                    <h3>{timeLeft.days}</h3>
                    <p>Days</p>
                </div>
            </div>
            <div className="highlight__timer">
                <div className="highlight__timer-time">
                    <h3>{timeLeft.hours}</h3>
                    <p>Hours</p>
                </div>
                <h4>:</h4>
                <div className="highlight__timer-time">
                    <h3>{timeLeft.minutes}</h3>
                    <p>Minutes</p>
                </div>
                <h4>:</h4>
                <div className="highlight__timer-time">
                    <h3>{timeLeft.seconds}</h3>
                    <p>Seconds</p>
                </div>
            </div>
            <a href="#!" className={`highlight__timer-btn ${prop.btn ? '' : 'timer__collapse'}`}>
                <p>Place Bid</p>
            </a>
        </div>
    );
}