import PageHeader from '../components/layout/PageHeader'
import Team from '../components/sections/Team'

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Our Team" current="Our Team" />
      <Team full />
    </>
  )
}
