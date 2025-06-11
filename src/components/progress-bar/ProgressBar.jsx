import './progress-bar.css';

export function ProgressBar({ label, value }) {
    return (
        <div className="progress-bar">
            <div className="top">
                <div className="label">{label}</div>
                <div className="value">{value}%</div>
            </div>
            <div className="bottom">
                <div className="bar" style={{ width: value + '%' }}></div>
            </div>
        </div>
    );
}