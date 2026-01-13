import water from '../assets/water.svg'
import sun from '../assets/sun.svg'
function CareScale(props) {
    // const scaleValue = props.scaleValue
    const { scaleValue, careType } = props
    // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType

    const waterImg = <img src={water} alt='icone goutte' />
    const sunImg = <img src={sun} alt='icone soleil' />
    const scaleType = careType === 'light' ? sunImg : waterImg
    // const scaleType = careType === 'light' ? '☀️' : '💧'



    const range = [1, 2, 3]

    return <div>
        {range.map((rangeElem) =>
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
        )}
    </div>
}

export default CareScale