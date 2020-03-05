import styled from 'styled-components'

export const Styles = styled.div`
  display: flex;
  margin-left: 8%;
  table {
    border-spacing: 0;

    tr {
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
    }
    td {
      display: flex;
      color: '#5580AA';
      font-size: 1.6rem;
      justify-content: space-evenly;
    }
    th,
    td {
      margin: auto;
      min-width: 180px;
      padding: 0.5rem;
      border-bottom: 1px solid #91bccf;

      :last-child {
        border-right: 0;
      }
    }
  }
`
