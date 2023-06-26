import { useState, useEffect } from 'react'
import './App.scss'

class Bubble {
  constructor (radius, position) {
    this.radius = radius
    this.position = {top: position[0], left: position[1]}
  }

  move (){
    var position = {...this.position}
    position.top = (parseInt(position.top.replace('px', '')) + 10) + 'px'
    position.left = (parseInt(position.left.replace('px', '')) + 10) + 'px'
    this.position = position
  }

  render () {
    return (<div className="bubble" style={this.position}></div>)
  }
}

function App() {
  
  const [bubbleRenderer, setBubbleRenderer] = useState('')

  useEffect(() => {
    const bubble = new Bubble(10, ['10px', '20px'])
    setInterval( () => {
      bubble.move()
      setBubbleRenderer(bubble.render())
    }, 50);
  }, [])

  return (
    <>
      <div id="worldBoundary">
        {bubbleRenderer}
      </div>
    </>
  )
}

export default App
