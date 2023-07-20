import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { TextField, Typography } from "@mui/material";
import { ConfirmButton, Container, Content, InputArea } from "./styles";

import { useAppSelector } from "../../redux/store";
import { signup } from "../../actions/user";


export function Signup() {
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSignup = () => {
    dispatch(signup(userName))
    setUserName('')
  }

  const user = useAppSelector(state => state.user.username)


  useEffect(() => {
    if (user) {
      navigate('/home')
    } else {
      navigate('/')
    }
  }, [navigate, user])

  return (
    <Container>
      <Content
        initial={{ scale: 0.96 }}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <Typography variant="h1">
          Welcome to CodeLeap network!
        </Typography>

        <InputArea>
          <Typography>Please enter your username</Typography>
          <TextField
            value={userName}
            onChange={(e) => setUserName(e.target.value.trim())}
            placeholder="John doe"
            sx={{ '.MuiOutlinedInput-root': { height: '32px' } }}
          />
        </InputArea>

        <ConfirmButton
          disabled={!userName}
          variant="contained"
          disableElevation
          onClick={handleSignup}
        >
          ENTER
        </ConfirmButton>
      </Content>
    </Container>
  )
}
