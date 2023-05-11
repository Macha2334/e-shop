type Props={
    size:number,
    className:string,
}
const Logo= (props:Props) => {

const radius=props.size/10;

const lineD=`M${radius} ${props.size} L${props.size-radius} ${props.size}`

const triangle1= `M${radius} ${props.size - (radius*2)} L${radius} 0 L${props.size/2} ${props.size/2} Z`
const triangle2= `M${props.size/2} ${props.size/2} L${props.size - radius} 0 L${props.size - radius} ${props.size - (radius*2)} Z`
return(
    <svg width={props.size} height={props.size} className={props.className}>
        <path d={triangle1}
            style={{fill:"white",stroke:"red",strokeWidth:"5px"}}/>
        <path d={triangle2}
            style={{fill:"white",stroke:"green",strokeWidth:"5px"}}/>
        <path d={lineD} style={{fill:"aquamarine",stroke:"white",strokeWidth:"5px"}}/>
        <circle cx={radius} cy={props.size - radius} r={radius}
            style={{stroke:"white",strokeWidth:"2px"}} />
        <circle cx={props.size - radius} cy={props.size - radius} r={radius}
            style={{stroke:"white",strokeWidth:"2px"}} />
    </svg>
)    
}
export default Logo;