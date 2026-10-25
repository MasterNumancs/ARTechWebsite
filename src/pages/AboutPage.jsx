import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Facts from '../components/sections/Facts'
import About from '../components/sections/About'
import Team from '../components/sections/Team'

export default function AboutPage() {
  usePageTitle('about')

  return (
    <>
      <PageHeader title="About AR Tech Solution" current="About" branded />
      <Facts />
      <About variant="about" />
      <Team />
    </>
  )
}
