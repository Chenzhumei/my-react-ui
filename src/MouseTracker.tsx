import * as React from 'react';


const MouseTracker: React.FC = () => {
    const [position, setPosition] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            console.log('inneer')
            setPosition({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('click', updateMouse)
        return () => {
            document.removeEventListener('click', updateMouse);
        }
    });

    return(
        <p>X:{position.x}, Y: {position.y}</p>
    )
}

export default MouseTracker;