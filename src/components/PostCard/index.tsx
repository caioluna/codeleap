import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { IconButton, Typography } from "@mui/material";
import { Header, Content, MetaData, Container } from "./styles";

import DeleteIcon from '../../assets/ic_baseline-delete-forever.svg'
import EditIcon from '../../assets/bx_bx-edit.svg'

import { useAppSelector } from "../../redux/store";

import { ModalDelete } from "../ModalDelete";
import { ModalEdit } from "../ModalEdit";
import { transformDateTime } from "../../utils/transformDateTime";
import { postVariant } from "../../utils/animations";

type PostCardProps = {
  custom: number;
  postData: {
    content: string;
    created_datetime: string;
    id: number;
    title: string;
    username: string;
  }
}

export function PostCard({ postData, custom }: PostCardProps) {
  const { content, created_datetime, id, title, username } = postData
  const user = useAppSelector(store => store.user.username)
  const queryClient = useQueryClient()

  const [isDeleting, setIsDeleting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const auth = user === username

  const contentToEdit = {
    id, title, content
  }

  const deletePost = (id: number) => {
    return axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)
  }

  const { mutate } = useMutation(deletePost, {
    onSuccess: () => {
      setIsDeleting(false)
      return queryClient.invalidateQueries(['posts'])
    }
  })

  return (
    <>
      <Container
        variants={postVariant}
        initial='initial'
        animate='animate'
        custom={custom}
      >
        <Header auth={auth}>
          <Typography>{title}</Typography>

          {
            auth && (
              <div>
                <IconButton onClick={() => setIsDeleting(true)}>
                  <img src={DeleteIcon} alt="Icon" />
                </IconButton>
                <IconButton onClick={() => setIsEditing(true)}>
                  <img src={EditIcon} alt="Icon" />
                </IconButton>
              </div>
            )
          }

        </Header>

        <Content>
          <MetaData>
            <Typography sx={{ fontWeight: 'bold' }}>@{username}</Typography>
            <Typography>{transformDateTime(created_datetime)}</Typography>
          </MetaData>

          <div>
            {content}
          </div>

        </Content>
      </Container>

      <ModalDelete open={isDeleting} setIsDeleting={setIsDeleting} submit={() => mutate(id)} />
      <ModalEdit open={isEditing} setIsEditing={setIsEditing} postContent={contentToEdit} />
    </>
  )
}
