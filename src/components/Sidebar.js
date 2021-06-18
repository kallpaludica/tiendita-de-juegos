import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import Navigation from "../components/Navigation"
import "./sidebar.css"

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      openMenu: false,
    }
  }

  closeMenu = () => {
    this.setState({
      openMenu: false,
    })
  }

  handleStateChange = state => {
    this.setState({
      openMenu: state.isOpen,
    })
  }

  render = () => {
    const { openMenu } = this.state

    return (
      <Menu
        width={200}
        right
        isOpen={openMenu}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Navigation closeMenu={this.closeMenu} />
      </Menu>
    )
  }
}

export default Sidebar
