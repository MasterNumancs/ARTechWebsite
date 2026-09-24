import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Quote from '../components/sections/Quote'

export default function QuotePage() {
  usePageTitle('Free Quote')

  return (
    <>
      <PageHeader title="Free Quote" current="Free Quote" />
      <Quote spaced={false} />
    </>
  )
}
