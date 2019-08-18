import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function User(props) {
  const { name, changeName } = props;

  const handleChangeName = () => {
    changeName();
  };

  return (
    <DropdownButton className="user-menu" size="md" id="dropdown-item-button" variant="outline-info" title={name}>
      <Dropdown.Item as="button" onClick={handleChangeName}>Change Name</Dropdown.Item>
    </DropdownButton>
  );
}
