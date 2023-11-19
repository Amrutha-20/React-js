//inline
import React from 'react'
export default function Day2c1() {
  return (
    <div>
        <h1 style={{color:'green'}}>Inline Style in JSX Example</h1>
      <div data-testid='app' style={{backgroundColor:'lightblue',color:'darkblue',padding:'10px',border:'1px solid blue',borderRadius:'5px'}}>
        <p style={{color:'darkblue',fontSize:'16px'}}>This is a paragraph with inline styles
applied</p>
      </div>
    </div>

  )
}
