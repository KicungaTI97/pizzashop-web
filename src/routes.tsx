import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFount } from './pages/404'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Dashboard } from './pages/dashboard/dashboard'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
    errorElement: <NotFount />,
  },
  {
    path: '/orders',
    element: <AppLayout />,
    children: [{ path: '/orders', element: <Orders /> }],
  },
  {
    path: '/sign-in',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
  {
    path: '/sign-up',
    element: <AuthLayout />,
    children: [{ path: '/sign-up', element: <SignUp /> }],
  },
])
