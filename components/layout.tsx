import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import GlobalStyle from '../theme/GlobalStyle'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <GlobalStyle />
      <div>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
