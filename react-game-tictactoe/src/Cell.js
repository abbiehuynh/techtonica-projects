// creates cell component containing props for id and cell 
const Cell = ({ id, cell }) => {
    return (
        <div className="square" id={id}>{cell}</div>
    )
}

export default Cell;