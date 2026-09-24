import { Link } from 'react-router-dom'

export default function PageHeader({ title, current }) {
  return (
    <div className="container-fluid page-header py-5 mb-5">
      <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="text-white" to="/">Home</Link>
            </li>
            <li className="breadcrumb-item text-white active" aria-current="page">
              {current || title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}
