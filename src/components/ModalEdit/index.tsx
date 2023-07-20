import { Dispatch, SetStateAction, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Button, Stack, TextField, Typography } from "@mui/material";
import { Action, ConfirmButton, Container, Content, InputArea } from "./styles";

import { generalVariant } from "../../utils/animations";

type ModalProps = {
  open: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  postContent: {
    id: number;
    title: string;
    content: string;
  };
}

export function ModalEdit({ open, setIsEditing, postContent }: ModalProps) {
  const { id, title, content } = postContent
  const queryClient = useQueryClient()

  const [postTitle, setPostTitle] = useState(title)
  const [postText, setPostText] = useState(content)

  const editPost = () => {
    return axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      title: postTitle,
      content: postText
    })
  }

  const { mutate } = useMutation(editPost, {
    onSuccess: () => {
      setIsEditing(false)
      return queryClient.invalidateQueries(['posts'])
    }
  })

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
          Edit item
        </Typography>

        <InputArea>
          <Stack sx={{ gap: '8px' }}>
            <Typography>Title</Typography>
            <TextField
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="Hello world"
              sx={{
                '.MuiInputBase-root': {
                  height: '32px',
                },
              }}
            />
          </Stack>

          <Stack sx={{ gap: '8px' }}>
            <Typography>Content</Typography>
            <TextField
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Content here"
              multiline
              rows={3}
            />
          </Stack>
        </InputArea>

        <Action>
          <Button onClick={() => setIsEditing(false)} variant="outlined">
            Cancel
          </Button>
          <ConfirmButton
            disabled={!postTitle || !postText}
            variant="contained"
            disableElevation
            onClick={() => mutate()}
          >
            Save
          </ConfirmButton>
        </Action>
      </Content>
    </Container>
  )
}
