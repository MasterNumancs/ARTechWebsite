import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'

export default function ServicePage() {
  usePageTitle('service')

  return (
    <>
      <PageHeader title="CCTV Installation & Maintenance Services in Lahore" current="Services" branded />
      <Services variant="page" />
      <Testimonials />
    </>
  )
}
