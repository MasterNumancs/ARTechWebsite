import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  usePageTitle('Contact')

  return (
    <>
      <PageHeader title="Contact" current="Contact" />
      <Contact />
    </>
  )
}
