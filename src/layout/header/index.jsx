import styles from './styles.module.scss'
import { MagnifyingGlassIcon, CameraIcon } from '@heroicons/react/24/solid'
import { Form, Link, useLocation } from 'react-router-dom'
import {useEffect, useState} from "react";

const Header = () => {
  const [value, setValue] = useState('')

  const location = useLocation()

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query') || ''
    setValue(query)
  }, [location.search])


  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <CameraIcon/>
      </Link>
      <Form method="get" action="/">
        <button type="submit">
          <MagnifyingGlassIcon />
        </button>
        <input type="text" value={value} onChange={handleChange} name="query" />
      </Form>
    </header>
  )
}

export default Header
