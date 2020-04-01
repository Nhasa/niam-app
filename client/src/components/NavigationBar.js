import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserLinks = ({ logout }) => (
  <Nav>
    <Nav.Link onClick={logout}>
      Logout
    </Nav.Link>
  </Nav>
)

const GuestLinks = () => (
  <Nav>
    <Nav.Link as={Link} to='/signup'>
      Sign Up
    </Nav.Link>
    <Nav.Link as={Link} to='/login'>
      Login
    </Nav.Link>
  </Nav>
)

class NavigationBar extends React.PureComponent {
  logout = (e) => {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to='/'>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          {isAuthenticated ? <UserLinks logout={this.logout} /> : <GuestLinks />}
        </Navbar.Collapse>
      </Navbar >
    )
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps, { logout })(NavigationBar)