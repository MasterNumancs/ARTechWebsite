import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Features from '../components/sections/Features'

export default function FeaturePage() {
  usePageTitle('feature')

  return (
    <>
      <PageHeader title="Why Choose AR Tech Solution in Lahore" current="Why Choose Us" />
      <Features spaced={false} />
    </>
  )
}
