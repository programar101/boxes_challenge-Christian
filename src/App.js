import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
   
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
