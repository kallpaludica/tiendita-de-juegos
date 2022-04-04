import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import OffcanvasNavigation from "@components/Offcanvas/OffcanvasNavigation"

class Offcanvas extends Component {
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
        <OffcanvasNavigation closeMenu={this.closeMenu} />
      </Menu>
    )
  }
}

export default Offcanvas
