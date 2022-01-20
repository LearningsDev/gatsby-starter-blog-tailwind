import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="bg-sky-100 text-4xl text-gray-900 font-semibold p-5">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <div className="bg-sky-100  text-3xl font-semibold  p-5">
        <Link to="/">
          {title}
        </Link>
      </div>

    )
  }

  return (
    <div className="w-full h-screen min-h-screen" data-is-root-path={isRootPath}>
      <div className="w-full ">{header}</div>
      <div className="w-10/12 mx-auto my-10">
        <main>{children}</main>
      </div>
      <div className="w-full fixed bottom-0 right-0 h-64 bg-gray-900 text-white">
        <div className="h-full flex justify-center items-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>

      </div>
    </div>
  )
}

export default Layout
