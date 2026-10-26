import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Products from '../components/sections/Products'

export default function ProductPage() {
  usePageTitle('products')

  return (
    <>
      <PageHeader title="CCTV Cameras, Networking & Computer Products in Lahore" current="Products" branded />
      <Products variant="page" />
    </>
  )
}
