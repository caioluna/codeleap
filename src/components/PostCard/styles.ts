import { css, styled } from "@mui/material";
import { motion } from "framer-motion";

type HeaderProps = {
  auth: boolean;
}

export const Container = styled(motion.article)`
  display: table;
  width: 100%;

  border: 1px solid #999;
  border-radius: 16px;

  overflow: hidden;
`

export const Header = styled('header')<HeaderProps>(
  ({theme, auth}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;
    padding: 0 24px;

    background-color: ${auth ? '#4565c0' : theme.palette.primary.main};
    color: #fff;

    p {
      font-size: 22px; 
      font-weight: bold;
    }
  `
);

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`

export const MetaData = styled('div')`
  display: flex;
  justify-content: space-between;
  color: #777;
`