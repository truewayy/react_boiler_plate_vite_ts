import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { User } from '../../interface/user';

const Main = () => {
  const [user, setUser] = useState<User>();
  const getUser = () => axios.get('/user').then((res) => setUser(res.data));
  return (
    <Container>
      <h1>{user?.name}</h1>
      <Button disabled={false} onClick={getUser} width="auto">
        내 정보 불러오기
      </Button>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
