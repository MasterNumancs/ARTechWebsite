import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Features from '../components/sections/Features'

export default function FeaturePage() {
  usePageTitle('Why Choose Us')

  return (
    <>
      <PageHeader title="Why Choose Us" current="Why Choose Us" />
      <Features spaced={false} />
    </>
  )
}
