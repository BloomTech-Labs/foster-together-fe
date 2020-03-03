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
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const TabContainer = styled.div`
  display: flex;
  font-size: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 5rem;
  color: ${({ theme: { palette } }) => palette.primary.light};
  border-bottom: ${({ theme: { palette } }) =>
    `5px solid ${palette.primary.light}`};
`

export const ActiveTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 5rem;
  color: ${({ theme: { palette } }) => palette.primary.main};
  border-bottom: ${({ theme: { palette } }) =>
    `5px solid ${palette.primary.main}`};
  font-weight: bold;
`

export const Stepper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Step = styled.div`
  display: flex;
  align-items: center;
`

export const StepLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.6rem;
  width: 3.5rem;
  border-radius: 100%;
  background: #a1a1a1;
  color: #fff;
  font-size: 1.6rem;
`

export const StepTitle = styled.div`
  color: #a1a1a1;
  font-size: 1.6rem;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
  width: 100%;
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
