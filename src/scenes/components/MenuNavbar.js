import React, { Component } from 'react'
import { Input, Menu, Dropdown, Image, Segment } from 'semantic-ui-react'

import ImageIcon  from '../../assets/favicon.ico'

import faker from 'faker'

export default class MenuNavbar extends Component {
  state = { activeItem: 'dashboard', style: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleDropdownClick = (e, { name }) => this.setState( { style: { color: 'blue' }} )

  render() {

    const { activeItem } = this.state

    const trigger = (
      <span>
        <Image avatar src={faker.internet.avatar()} /> {faker.name.findName()}
      </span>
    )

    const options = [
      { key: 'user', text: 'Account', icon: 'user' },
      { key: 'settings', text: 'Settings', icon: 'settings' },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]

    return (
      <div>
        <Menu fixed='top' stile={{position: 'relative'}} pointing stackable>

          <Menu.Item>
            <Image src={ImageIcon} size='mini'/>
          </Menu.Item>

          <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />

          <Dropdown pointing item text='Clientes'>
            <Dropdown.Menu>
              <Dropdown.Item>Novo</Dropdown.Item>
              <Dropdown.Item>Gerenciar</Dropdown.Item>
              <Dropdown.Item>Detalhes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown pointing item text='Funcionarios'>
            <Dropdown.Menu>
              <Dropdown.Item>Novo</Dropdown.Item>
              <Dropdown.Item>Gerenciar</Dropdown.Item>
              <Dropdown.Item>Detalhes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown pointing item text='Atendimentos'>
            <Dropdown.Menu>
              <Dropdown.Item>Novo</Dropdown.Item>
              <Dropdown.Item>Gerenciar</Dropdown.Item>
              <Dropdown.Item>Detalhes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
      
          <Menu.Menu style={{ paddingTop: '16px', paddingRight: '15px' }}>
            <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
          </Menu.Menu>

        </Menu>

      </div>
    )
  }
}