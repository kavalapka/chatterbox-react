import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function User(props) {
  const { name } = props;
  return (
    <DropdownButton className="user-menu" size="sm" id="dropdown-item-button" title={name}>
      <Dropdown.Item as="button">Change Name</Dropdown.Item>
      <Dropdown.Item as="button">Login</Dropdown.Item>
      <Dropdown.Item as="button">Logout</Dropdown.Item>
    </DropdownButton>
  );
}
