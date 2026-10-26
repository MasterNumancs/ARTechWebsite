import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  usePageTitle('contact')

  return (
    <>
      <PageHeader title="Contact AR Tech Solution in Lahore" current="Contact" branded />
      <Contact />
    </>
  )
}
