import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.px.spacing.page};
  width: ${({ theme }) => theme.width.page / 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: ${({ theme }) => theme.px.spacing.page} auto ${({ theme }) => theme.px.spacing.page};
  height: calc(100vh - ${({ theme }) => theme.height.nav * 2 + theme.height.footer + 8}px);
`
export const Box = styled.div`
  ${'' /* border-top: 1px solid #797807;
  border-bottom: 1px solid #797807; */} height: 200px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 14px;
`

export const Text = styled.p`
  text-align: center;
  letter-spacing: normal;
`
