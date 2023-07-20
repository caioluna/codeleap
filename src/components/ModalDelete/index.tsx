import { Dispatch, SetStateAction } from "react";

import { Button, Typography } from "@mui/material";
import { Action, ConfirmButton, Container, Content } from "./styles";

import { generalVariant } from "../../utils/animations";

type ModalProps = {
  open: boolean;
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
  submit: () => void;
}

export function ModalDelete({ open, setIsDeleting, submit }: ModalProps) {
  return (
    <Container open={open}>
      <Content
        variants={generalVariant}
        initial='initial'
        animate='animate'
        whileHover='hover'
      >
        <Typography sx={{
          fontSize: '22px',
          fontWeight: 'bold'
        }}>
          Are you sure you want to delete this item?
        </Typography>
        <Action>
          <Button onClick={() => setIsDeleting(false)} variant="outlined">
            Cancel
          </Button>

          <ConfirmButton
            variant="contained"
            disableElevation
            onClick={submit}
          >
            Delete
          </ConfirmButton>
        </Action>
      </Content>
    </Container>
  )
}
