import { styled, Modal, Button,  } from "@mui/material";
import { motion } from "framer-motion";

export const Container = styled(Modal)`
  display: grid;
  place-items: center;
`

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column; 
  gap: 24px;

  min-width: 500px;
  padding: 24px;

  border-radius: 16px;
  background-color: #fff;
`

export const InputArea = styled('div')`
  display: flex;
  flex-direction: column; 
  gap: 8px;
`

export const Action = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`

export const ConfirmButton = styled(Button)`
  background-color: #47B960;
  
  :hover {
    background-color: #2F8C44;
  }
`