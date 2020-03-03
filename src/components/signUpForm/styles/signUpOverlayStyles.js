import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10vh auto;
  background: #fff;
  min-height: 80vh;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(180, 180, 180, 0.2),
    0 6px 20px 0 rgba(180, 180, 180, 0.19);
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: #f9f9f9;
  width: 30%;
  padding: 25px;
  color: ${({ theme: { palette } }) => palette.primary.main};
`

export const MainContent = styled.div`
  width: 70%;
  padding: 25px 120px;
`

export const Logo = styled.div`
  margin-left: 25px;
`

export const SidebarTitle = styled.h2`
  font-size: 1.8rem;
  margin: 50px 0;
`

export const Instructions = styled.ol`
  font-size: 1.4rem;
  margin: 0 0 0 -8px;
  padding: 0 25px;
`

export const ListItem = styled.li`
  margin-bottom: 20px;
`

export const BackArrow = styled.div``

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
`

export const BackBtn = styled.button`
  color: #757575;
  background: #fff;
  border: none;
  width: 8rem;
  height: 5.6rem;
  font-size: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`

export const NextBtn = styled.button`
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
  height: 5.6rem;
  width: 14rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`
