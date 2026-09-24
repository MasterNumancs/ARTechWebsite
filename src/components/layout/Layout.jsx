import { Outlet } from 'react-router-dom'
import { useGlobalUiEffects, usePageEffects } from '../../hooks/useTemplateEffects'
import Spinner from './Spinner'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import Copyright from './Copyright'
import BackToTop from './BackToTop'
import LiveChat from './LiveChat'

export default function Layout() {
  useGlobalUiEffects()
  usePageEffects()

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />
      <LiveChat />
      <BackToTop />
    </>
  )
}
