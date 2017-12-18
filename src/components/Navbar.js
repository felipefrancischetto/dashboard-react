import React, { Component } from 'react'
import { Link } from'react-router-dom'
import { Input, Menu, Dropdown, Image, Segment } from 'semantic-ui-react'

import ImageIcon  from '../assets/favicon.ico'

import faker from 'faker'

export default class Navbar extends Component {
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
        <Menu fixed='top' pointing stackable>

          <Menu.Item>
            <Image src={ImageIcon} size='mini'/>
          </Menu.Item>

          <Menu.Item as={Link} to='/' name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />

          <Dropdown pointing item text='Clientes'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/customer/new'>Novo</Dropdown.Item>
              <Dropdown.Item as={Link} to='/customer/manage'>Gerenciar</Dropdown.Item>
              <Dropdown.Item as={Link} to='/customer/details'>Detalhes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown pointing item text='Funcionarios'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/employee/new'>Novo</Dropdown.Item>
              <Dropdown.Item as={Link} to='/employee/manage'>Gerenciar</Dropdown.Item>
              <Dropdown.Item as={Link} to='/employee/details'>Detalhes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown pointing item text='Atendimentos'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/attendance/new' >Novo</Dropdown.Item>
              <Dropdown.Item as={Link} to='/attendance/manage'>Gerenciar</Dropdown.Item>
              <Dropdown.Item as={Link} to='/attendance/details'>Detalhes</Dropdown.Item>
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