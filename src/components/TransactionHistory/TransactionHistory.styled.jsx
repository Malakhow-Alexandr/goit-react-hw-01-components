import styled from '@emotion/styled';

export const Table = styled.table`
  width: 800px;

  border-radius: 15px;
  box-shadow: ${props => `${props.theme.tableColors.shadow}`};
  overflow: hidden;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  height: 70px;
  outline: none;

  background-color: ${props => `${props.theme.tableColors.blue}`};

  th {
    color: ${props => `${props.theme.tableColors.white}`};
    font-size: 30px;
  }

  th:not(:last-child) {
    border-right: 1px solid ${props => `${props.theme.tableColors.white}`};
  }
`;

export const TableBody = styled.tbody`
  td {
    text-align: center;
    font-size: 25px;
    color: ${props => `${props.theme.tableColors.secondaryText}`};
  }
  td:not(:last-child) {
    border-right: 1px solid ${props => `${props.theme.tableColors.outline}`};
  }

  tr {
    height: 70px;
  }
  tr:nth-of-type(2n + 1) {
    background-color: ${props => `${props.theme.tableColors.white}`};
  }
`;
