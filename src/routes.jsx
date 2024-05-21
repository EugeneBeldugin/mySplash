import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { ItemsPage, ItemPage } from './pages'
import { apiMethods } from './api.js'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <ItemsPage />,
        loader: apiMethods.get,
        action: apiMethods.get,
        index: true
      },
      {
        element: <ItemPage />,
        loader: apiMethods.getOne,
        path: 'photos/:id'
      }
    ]
  }
])