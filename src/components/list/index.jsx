import { useEffect, useState } from 'react'
import Item from '../item/index.jsx'
import styles from './styles.module.scss'

import { createGrid } from '../../helpers.js'
import { SMALL_GRID, LARGE_GRID } from '../../constants.js'

const List = ({ items, gridValue }) => {
  const [gridLayout, setGridLayout] = useState([])

  useEffect(() => {
    let gridIndex = 0
    const grid = createGrid(gridValue)
    items.forEach(item => {
      grid[gridIndex].push(item)
      gridIndex === gridValue - 1 ? gridIndex = 0 : gridIndex++
    })
    setGridLayout(grid)
  }, [gridValue, items])

  return (
    <div className={styles['list-container']}>
      {
        gridLayout.map(array => (
          <div
            className={styles.column}
            key={Math.random().toString(36).substr(2, 9)}
          >
            {
              array.map(item => (
                <Item item={item} key={item.id} />
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default List