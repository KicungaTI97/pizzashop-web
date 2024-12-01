import { Helmet, HelmetProvider } from 'react-helmet-async'

import { router } from '@/routes'

export function SignIn() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
