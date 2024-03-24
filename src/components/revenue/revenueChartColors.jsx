import { useDrawingArea } from '@mui/x-charts/hooks';


const Colorswitch = () => {
const { top, height, bottom } = useDrawingArea();
const svgHeight = top + bottom + height;

return (
<>
    <defs>
        <linearGradient id="paint0_linear_45_2" x1="300.25" y1="46.9999" x2="300.25" y2={`${svgHeight}px`}
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#2F4CDD" stop-opacity="0.4" />
            <stop offset="1" stop-color="#2F4CDD" stop-opacity="0" />
        </linearGradient>
    </defs>

    <defs>
        <linearGradient id="paint0_linear_45_3" x1="299.498" y1="-4.28272" x2="299.498" y2={`${svgHeight}px`}
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#B519EC" stop-opacity="0.4" />
            <stop offset="1" stop-color="#B519EC" stop-opacity="0" />
        </linearGradient>
    </defs>
</>
)
}

export default Colorswitch