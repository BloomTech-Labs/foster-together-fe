import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

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
      background-color: #517E92;
      color: white;
      font-size: 2rem;
    }
    td {
      color: "#5580AA";
      font-size: 1.6rem;
    }
    th,
    td {
      margin: auto;
      text-align: left;
      min-width: 180px;
      padding: 0.5rem;
      border-bottom: 1px solid grey;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
