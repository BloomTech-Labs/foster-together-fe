import styled from 'styled-components'

export const Styles = styled.div`
  display: flex;
  table {
    border-spacing: 0;

    tr {
      display: flex;
      height: 7vh;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th {
      background-color: #f5f5f5;
      color: #517e92;
      font-size: 1.3rem;
      font-weight: normal;
      height: 7vh;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    td {
      display: flex;
      align-items: center;
      color: #5580aa;
      font-size: 1.6rem;
      justify-content: space-evenly;
      margin: 0 auto;
    }
    th,
    td {
      min-width: 180px;
      border-bottom: 1px solid #91bccf;

      :last-child {
        border-right: 0;
      }
    }
  }
`
