import styled from "styled-components";

export const Container = styled.div`
  svg{
    font-size: 20px;
    &.presenca{
      color: ${({theme}) => theme.colors.primary.dark};
    }
    &.falta{
      color: ${({theme}) => theme.colors.danger.dark};
    }
  }

  table{
    tbody{
      tr:hover{
        cursor: pointer;
        background: ${({ theme }) => theme.colors.primary.lighter};
      }
    }

    td {
      &.cpf{
        width: 140px;
      }
    }
  }
`

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid ${({theme}) => theme.colors.gray[500]};
`

export const Count = styled.div`
  h3{
    color: ${({theme}) => theme.colors.gray[600]};
    font-size: 24px;
  }
`
