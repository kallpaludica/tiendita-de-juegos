import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import AlgoliaSearch from "../components/Search/AlgoliaCollapseSearch"
import "./sidebar.css"

class SidebarFilters extends Component {
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

  handleStateChange = (state) => {
    this.setState({
      openMenu: state.isOpen,
    })
  }

  render = () => {
    const { openMenu } = this.state

    return (
      <Menu
        width={230}
        left
        isOpen={openMenu}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <AlgoliaSearch />
      </Menu>
    )
  }
}

export default SidebarFilters
