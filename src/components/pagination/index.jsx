import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import styles from './styles.module.scss'

const Pagination = ({ pages, setPrevPage, currentPage, setNextPage, pagesBar, setPage }) => {
  const searchParams = new URL(document.location).searchParams

  const arr = []

  for (const [key, value] of searchParams.entries()) {
    if (key !== 'page') {
      arr.push({ key, value })
    }
  }
  return (
    <div>
      {
        arr.map(item => (
          <input type="hidden" key={item.key} name={item.key} value={item.value} />
        ))
      }
      {
        pages > 1 && (
          <div className={styles.pages}>
            {+currentPage !== 1 && <button name="page" value={currentPage} onClick={setPrevPage}><ChevronLeftIcon/></button>}
            {
              pagesBar.map((page, index) => page === '...' ? <p key={`${index}_${page}`}>{page}</p> :
                <button name="page" value={page} key={`${index}_${page}`} className={+page === +currentPage ? styles.currentPage : undefined } value={page} onClick={setPage}>{page}</button>)
            }
            {pages !== +currentPage && <button name="page" value={currentPage} onClick={setNextPage}><ChevronRightIcon/></button>}
          </div>
        )
      }
    </div>
  )
}

export default Pagination