/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { Container, Content, Header, LoadMore, PostInput } from "./styles";

import { PostCard } from "../../components/PostCard";
import { generalVariant } from "../../utils/animations";

import { useAppSelector } from "../../redux/store";

interface Post {
  content: string;
  created_datetime: string;
  id: number;
  title: string;
  username: string;
}

interface ResponseData {
  count: number;
  next: string;
  previous: string | null;
  results: Post[];
}

export function Main() {
  const [postTitle, setPostTitle] = useState('')
  const [postText, setPostText] = useState('')

  const user = useAppSelector(state => {
    return state.user.username
  })

  const getPosts = async ({ pageParam = 'https://dev.codeleap.co.uk/careers/' }) => {
    const response = await axios.get<ResponseData>(`${pageParam}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    )
    return response.data
  }

  const sendPost = () => {
    return axios.post('https://dev.codeleap.co.uk/careers/', {
      username: user,
      title: postTitle,
      content: postText
    })
  }

  const { data, isSuccess, refetch, hasNextPage, fetchNextPage } = useInfiniteQuery(['posts'], getPosts,
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getNextPageParam: (lastPage, _pages) => {
        if (lastPage.next !== null) {
          return lastPage.next
        }
        return false
      },
    }
  )

  const { mutate, isLoading } = useMutation(sendPost, {
    onSuccess: (data) => {
      if (data.status === 201) {
        setPostTitle('')
        setPostText('')
        return refetch()
      }
    }
  })

  return (
    <Container>
      <Header>
        <Typography>CodeLeap Network</Typography>
      </Header>
      <Content>
        <PostInput>

          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: 'bold'
            }}
          >
            What's on your mind?
          </Typography>

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
          <Button
            disabled={!postText || !postTitle}
            variant="contained"
            onClick={() => mutate()}
            sx={{ alignSelf: 'flex-end' }}
          >
            {isLoading ? <CircularProgress size={20} /> : 'Create'}
          </Button>
        </PostInput>

        {
          isSuccess ? (
            data && data.pages.map((group) => (
              group.results.map((post: Post, index) => (
                <PostCard
                  key={post.id}
                  custom={index}
                  postData={post}
                />
              )
              )))
          ) : (
            <CircularProgress />
          )
        }

        <LoadMore
          variants={generalVariant}
          initial={{ scale: 0.95 }}
          whileHover='hover'
        >
          <Button
            variant="contained"
            color="primary"
            disabled={!hasNextPage}
            type="button"
            onClick={() => fetchNextPage()}
          >
            Load more
          </Button>
        </LoadMore>
      </Content>
    </Container>
  )
}
