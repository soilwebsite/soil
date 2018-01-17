import styled from 'styled-components'

export const speed = 0.6
const width = 33

export const Container = styled.div`
  height: 100%;
`

export const Title = styled.h2`
  font-weight: normal;
  font-size: 16px;
  letter-spacing: normal;
`

export const Window = styled.div`
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Reel = styled.ul`
  height: 100%;
  max-width: calc(
    195vh - ${({ theme }) => theme.height.nav + theme.height.footer}px
  );
  margin: 0;
  padding: 0;
  white-space: nowrap;
  transition: transform ${p => (p.inTransition ? speed : 0)}s;
  transform: translateX(-${p => p.activeIdx * width - width}%);
`

export const Item = styled.li`
  height: 100%;
  width: ${width}%;
  white-space: normal; /* reset */
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  object-fit: scale-down;
  // object-position: ${p =>
    p.isActive ? 'center' : p.activeIdx < p.i ? 'left' : 'right'} center;
  height: 100%;
  width: 100%;
  transition: all ${p => (p.inTransition ? speed : 0)}s;
  transform: scale(${({ isActive }) => (isActive ? 1 : 0.8)});
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`
