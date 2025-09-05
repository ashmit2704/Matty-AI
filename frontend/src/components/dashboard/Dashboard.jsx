import { useEffect, useRef, useState } from "react";
import { Canvas } from "fabric";
import "./Dashboard.css"

const Dashboard = () => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if(canvasRef.current) {
            const initCanvas = new Canvas(canvasRef.current, {
                height: 600,
                width: 600,
            });
            initCanvas.backgroundColor = "#fff";
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            }
        }
    }, [])

    return (
        <div className="Dashboard">
            <canvas id="canvas" ref={canvasRef}/>
        </div>
    )
}

export default Dashboard;