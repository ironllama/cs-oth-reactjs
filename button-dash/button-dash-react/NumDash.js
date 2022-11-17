function NumDash(props) {
    return (
        <div className="num_section">
            <div className="num_title title">Num times pressed:</div>
            <div className="num">{props.num}</div>
        </div>
    );
}