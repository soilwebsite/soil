import styled from 'styled-components'

export const ItemGrid = styled.div`
  width: 100% - ${({ theme }) => theme.px.width.sidebar};
  margin-left: ${({ theme }) => theme.px.width.sidebar};
  padding: ${({ theme }) => theme.px.spacing.page} 0;
  display: flex;
  ${'' /* column-count: 2;
  column-gap: 0; */}
   > div {
    margin-left: ${({ theme }) => theme.px.spacing.page};
    width: calc(50% - ${({ theme }) => theme.px.spacing.page});
  }
  @media screen and (max-width: 890px) {
    margin-left: 0;
    > div {
      margin-left: 0;
      &:first-child {
        margin-right: ${({ theme }) => theme.px.spacing.page};
      }
    }
  }
`
