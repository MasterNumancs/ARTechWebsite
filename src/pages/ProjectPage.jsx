import PageHeader from '../components/layout/PageHeader'
import Projects from '../components/sections/Projects'

export default function ProjectPage() {
  return (
    <>
      <PageHeader title="Projects" current="Projects" />
      <Projects />
    </>
  )
}
