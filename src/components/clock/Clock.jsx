import './clock.css';

export function Clock() {
    return (
        <div className="clock">
            <div className="time">
                <div className="value">432</div>
                <div className="label">Days</div>
            </div>
            <div className="time">
                <div className="value">09</div>
                <div className="label">Hours</div>
            </div>
            <div className="time">
                <div className="value">37</div>
                <div className="label">Minutes</div>
            </div>
            <div className="time">
                <div className="value">39</div>
                <div className="label">Seconds</div>
            </div>
        </div>
    );
}