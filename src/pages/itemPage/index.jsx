import { Form, useLoaderData, Link } from 'react-router-dom'
import { EyeIcon, HeartIcon } from '@heroicons/react/24/solid'
import styles from './styles.module.scss'

const ItemPage = () => {
  const { item } = useLoaderData()
  return (
    <div className={styles.container}>
      <div className="w-[100%] lg:w-[50%]">
        <img src={item.urls.small} alt="image" />
      </div>
      <div className={styles.info}>
        <p><span>User:</span> {item.user.first_name} {item.user.last_name}</p>
        <p><span>Created at:</span> {item.created_at}</p>
        <div className={styles.activities}>
          <div>
            <EyeIcon />
            <span>{item.views}</span>
          </div>
          <div>
            <HeartIcon />
            <span>{item.likes}</span>
          </div>
        </div>
        <div className={styles.form}>
          {
            item.tags.map((tag, index) => (
              <Link key={`${tag}_${index}`} to={`/?query=${tag.title}`}>
                <button type="submit">{tag.title}</button>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ItemPage