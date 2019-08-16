import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';


export default function LoginForm(props) {
  const { setUserName } = props;
  let NAME = '';

  const setName = () => {
    localStorage.setItem('CHATTERBOX_USERNAME', NAME);
    setUserName(NAME);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setName();
    }
  };

  const handleChange = (e) => {
    NAME = e.target.value;
  };

  return (
    <div className="login-form">
      <InputGroup className="mb-3">
        <FormControl
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Append onClick={setName}>
          <Button id="basic-addon1" variant="outline-dark">Send</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
