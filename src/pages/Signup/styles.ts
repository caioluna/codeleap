import { styled, Button } from "@mui/material";
import { motion } from "framer-motion";

export const Container = styled('div')`
  display: grid;
  place-items: center;

  height: 100vh;
  background-color: #ddd;
`

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column; 
  gap: 24px;

  min-width: 500px;
  padding: 24px;

  border-radius: 16px;
  background-color: #fff;

  h1 {
    font-size: 22px;
    font-weight: bold;
  }
`

export const InputArea = styled('div')`
  display: flex;
  flex-direction: column; 
  gap: 8px;
`

export const ConfirmButton = styled(Button)`
  align-self: flex-end;
  width: 111px;
`
