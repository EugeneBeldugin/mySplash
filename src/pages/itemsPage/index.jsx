import {useEffect, useState} from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { List, Switcher, Pagination } from '../../components'

import { SMALL_GRID, ITEMS_PER_PAGE } from '../../constants.js'

const FULL_PAGES = 5

const ItemsPage = () => {
  const [grid, setGrid] = useState(SMALL_GRID);
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesBar, setPagesBar] = useState([])

  const { data, count, page, query } = useLoaderData()

  const pages = count ? Math.ceil(+count / ITEMS_PER_PAGE) : 1;

  useEffect(() => {
    if (pages <= FULL_PAGES) {
      let numbers = []
      for (let i = 0; i < pages; i++) {
        numbers.push(i++)
      }
      setPagesBar(numbers);
    } else {
      if (currentPage <= 3) {
        setPagesBar([1, 2, 3, 4, '...', pages]);
      } else if (currentPage >= pages - 2) {
        setPagesBar([1, '...', pages - 3, pages - 2, pages - 1, pages]);
      } else {
        setPagesBar([1, '...', currentPage - 1, currentPage, +currentPage + 1, '...', pages]);
      }
    }
  },[currentPage, pages])

  useEffect(() => {
    if (page) {
      setCurrentPage(page)
    }
  }, [page])

  const changeGridHandler = value => setGrid(value)

  const setNextPageHandler = () => setCurrentPage(+currentPage + 1)

  const setPrevPageHandler = () => setCurrentPage(currentPage - 1)

  const setPageHandler = event => setCurrentPage(+event.target.value)

  return (
    <main className="py-8">
      <div className="my-0 mx-auto mb-6 flex flex-col justify-between items-center gap-6 lg:flex-row lg:w-[80%]">
        <Switcher gridValue={grid} changeGrid={changeGridHandler} />
        {
          query ? <h2 className="uppercase">{query}</h2> : <></>
        }
        <Form method="get">
          <Pagination
            pages={pages}
            setPrevPage={setPrevPageHandler}
            currentPage={currentPage}
            setNextPage={setNextPageHandler}
            pagesBar={pagesBar}
            setPage={setPageHandler}
          />
        </Form>
      </div>
      <List items={data} gridValue={grid} />
      <div className="my-0 mx-auto mt-6">
        <Form method="get">
          <Pagination
            pages={pages}
            setPrevPage={setPrevPageHandler}
            currentPage={currentPage}
            setNextPage={setNextPageHandler}
            pagesBar={pagesBar}
            setPage={setPageHandler}
          />
        </Form>
      </div>
    </main>
  )
}

export default ItemsPage