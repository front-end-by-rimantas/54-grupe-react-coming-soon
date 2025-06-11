export function Time({ value, label }) {
    function formatTime(n) {
        return n < 10 ? '0' + n : n;
    }

    return (
        <div className="time">
            <div className="value">{formatTime(value)}</div>
            <div className="label">{label}</div>
        </div>
    );
}