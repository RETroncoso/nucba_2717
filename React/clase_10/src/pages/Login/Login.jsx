import styled from 'styled-components';
import { Card } from '../Products/Products';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  width: 100%;

  & input {
    padding: 10px;
    width: 100%;
    border: none;
    outline: none;
    background: #282c34;
    color: #fff;
  }
`;

export const Button = styled.button`
  background-color: #3da9fc;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 15px 25px;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const Login = () => {

  const {isAuth, form, handleSubmit, handleChange} = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  }, [isAuth]);

  return (
    <LoginContainer>
      <Card>
        <img
          src='https://www.thesun.ie/wp-content/uploads/sites/3/2022/12/2022-argentinas-lionel-messi-kisses-784174076-3.jpg?strip=all&quality=100&w=1080&h=1080&crop=1'
          alt=''
        />
        <LoginForm>
          <input
            type='text'
            placeholder='Username'
            id='username'
            name='username'
            value={form.username}
            onChange={(e) => handleChange(e)}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            name='password'
            value={form.password}
            onChange={(e) => handleChange(e)}
          />
          <Button type='submit' onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
};
