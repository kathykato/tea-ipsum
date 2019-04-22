import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <svg class="leaf-icon" width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M5 19C3 7 9 3 21 3c0 12-4 18-16 16zM3 21L16 8" stroke-linejoin="round"/>
          <path d="M9 11v4h4M12 8v4h4"/>
        </g>
      </svg>
      <h1>{siteTitle}</h1>
      <p className="lead">A quali-tea placeholder text generator.</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
