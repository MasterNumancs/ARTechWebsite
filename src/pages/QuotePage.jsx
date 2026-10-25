import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Quote from '../components/sections/Quote'

export default function QuotePage() {
  usePageTitle('quote')

  return (
    <>
      <PageHeader title="Free Quote for CCTV, Networking & Computers" current="Free Quote" branded />
      <Quote spaced={false} variant="page" />
    </>
  )
}
