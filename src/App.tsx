import './globals.css'

import { Helmet } from 'react-helmet-async' // permite gerenciar metadados de documentos HTML, como <title>, <meta>, <link>

export function App() {
  return (
    <>
      <Helmet title="Login" />
    </>
  )
}
