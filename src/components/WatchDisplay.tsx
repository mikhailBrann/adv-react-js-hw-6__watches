import { useState, useEffect } from 'react';
import Watch from  '../types/Watch';

const WatchDisplay = ({ watch, onDelete }: { watch: Watch, onDelete: (id: number) => void }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        const date = new Date();

        date.setHours(date.getHours() + watch.timezone);
            setTime(date);
        }, 1000);

        return () => clearInterval(timer);
    }, [watch.timezone]);

    //переменные для визуализации часов
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hourDegrees = (hours * 30) + (minutes / 2);
    const minuteDegrees = minutes * 6;
    const secondDegrees = seconds * 6;

    return (
        <div className="watch">
            <button className="watch__delete" onClick={() => onDelete(watch.id)}>✕</button>
            <h3>{watch.name}</h3>
            <div className="watch__face">

                <div className="watch__center"></div>
                <div 
                className="watch__hour-hand"
                style={{ transform: `translate(-100%, -100%) rotate(${hourDegrees}deg)` }}
                ></div>
                <div 
                className="watch__minute-hand"
                style={{ transform: `translate(-100%, -100%) rotate(${minuteDegrees}deg)` }}
                ></div>
                <div 
                className="watch__second-hand"
                style={{ transform: `translate(-100%, -100%) rotate(${secondDegrees}deg)` }}
                ></div>
            </div>
            <div className="watch__time">
                {time.toLocaleTimeString()}
            </div>
            <div className="watch__timezone">
                GMT {watch.timezone >= 0 ? '+' : ''}{watch.timezone}
            </div>
        </div>
    );
};

export default WatchDisplay;