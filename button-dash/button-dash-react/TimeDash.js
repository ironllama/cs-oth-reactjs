function TimeDash(props) {
    return (
        <div id="time_section">
            <div id="time_title" className="title">Pressed logs:</div>
            <div id="time">{props.allTime}</div>
        </div>
    )
}