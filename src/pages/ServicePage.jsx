import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Services from '../components/sections/Services'

export default function ServicePage() {
  usePageTitle('Services')

  return (
    <>
      <PageHeader title="Services" current="Services" />
      <Services />
    </>
  )
}
