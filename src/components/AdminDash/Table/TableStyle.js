import styled from 'styled-components'

export const TableHtml = styled.table`
  border-spacing: 0;
  width: 100%;
`
export const TableRow = styled.tr`
  display: flex;
  height: 7vh;
  :last-child {
    td {
      // border-bottom: 0;
    }
  }
`

export const TableHeader = styled.th`
  background-color: #f5f5f5;
  color: #517e92;
  font-size: 1.3rem;
  font-weight: normal;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  border-bottom: 1px solid #91bccf;
  width: 100%;
  :last-child {
    border-right: 0;
  }
`
export const TableData = styled.td`
  border-spacing: 0;
  display: flex;
  align-items: center;
  color: #5580aa;
  font-size: 1.6rem;
  justify-content: space-evenly;
  min-width: 180px;
  border-bottom: 1px solid #91bccf;
  width: 100%;

  :last-child {
    border-right: 0;
  }
`
