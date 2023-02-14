import React from 'react';

/**
 * The Cell component represents the fundamental "clickable object" in
 * retro-draw, there will be <Cell /> in both Palette and Grid.
 * 
 * Props passed in will include:
 * - color, which is the background color of the cell
 * - isActive, which will be set only on cells in the Palette
 * - handleClick, which will be a function to run when the cell has been clicked on 
 */
const Cell = (props) => {
  /* Create constants for color, isActive, and handleClick, reading the value off of props */
  const color = props.color
  const isActive = props.isActive
  const handleClick = props.handleClick
  /**
   * For the template you need to
   * - set the className to be "cell active" if the value of isActive
   *    is true
   * - set the style property on the div to have backgroundColor equal to the 
   *    color string passed in with the props
   * - set the onClick property to be equal to the handleClick function
   *    passed in with the props
   */
  return <div className= {isActive ? "cell active": "cell"}></div>
}

export default Cell;