const Frame = ({url, width, height}) => {

    return (
        <div className="mapContainer">
            <iframe src={url} width={width} height={height} frameBorder="0">
            </iframe>
        </div>
    )
}

export default Frame