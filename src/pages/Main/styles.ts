import { css, styled } from "@mui/material";
import { motion } from "framer-motion";

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0; 
  background-color: #DDD;
`

export const Header = styled('header')(
  ({theme}) => css`
    display: flex;
    align-items: center;

    width: 800px;
    height: 80px;
    padding: 0 37px;

    background-color: ${theme.palette.primary.main};
    color: #fff;

    p {
      font-size: 22px; 
      font-weight: bold;
    }
  `
);

export const Content = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  width: 800px;
  height: 100%;

  padding: 24px; 

  background-color: #FFF;
`

export const PostInput = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 24px;

  border: 1px solid #000;
  border-radius: 16px;
`

export const LoadMore = styled(motion.div)`
  display: flex;
  align-self: center;
`
