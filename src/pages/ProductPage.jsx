import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import Products from '../components/sections/Products'

export default function ProductPage() {
  usePageTitle('Products')

  return (
    <>
      <PageHeader title="Products" current="Products" />
      <Products />
    </>
  )
}
