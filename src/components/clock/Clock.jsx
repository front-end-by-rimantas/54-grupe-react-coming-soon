import './clock.css';
import { Time } from './Time';

export function Clock() {
    const timerNumbers = [432, 9, 37, 39];
    const timerTexts = ['Days', 'Hours', 'Minutes', 'Seconds'];

    return (
        <div className="clock">
            {timerNumbers.map((value, i) =>
                <Time key={timerTexts[i]} value={value} label={timerTexts[i]} />)}
        </div>
    );
}