import { useState } from 'react'
import styles from './styles.module.scss'
import { createGrid } from '../../helpers.js'
import { LARGE_GRID, SMALL_GRID } from '../../constants.js'

const Switcher = ({ gridValue, changeGrid }) => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
    gridValue === SMALL_GRID ? changeGrid(LARGE_GRID) : changeGrid(SMALL_GRID)
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`${styles['grid-icon-wrapper']} ${
        isOn ? 'bg-gray-200' : 'bg-sky-200'
      }`}>
        {
          createGrid(SMALL_GRID).map((array, index) => (
            <div
              className={`${styles['grid-icon']} w-[25%] ${
                isOn ? 'bg-gray-300' : 'bg-sky-300'
              }`}
              key={index}
            ></div>
          ))
        }
      </div>
      <div
        onClick={handleToggle}
        className={`${styles.switcher} ${
          isOn ? 'bg-rose-200' : 'bg-sky-200'
        }`}
      >
        <div
          className={isOn ? 'translate-x-4' : 'translate-x-0'}
        ></div>
      </div>
      <div className={`${styles['grid-icon-wrapper']} ${
        !isOn ? 'bg-gray-200' : 'bg-rose-200'
      }`}>
        {
          createGrid(LARGE_GRID).map((array, index) => (
            <div
              className={`${styles['grid-icon']} w-[15%] ${
                !isOn ? 'bg-gray-300' : 'bg-rose-300'
              }`}
              key={index}
            ></div>
          ))
        }
      </div>
    </div>
  )
}

export default Switcher
