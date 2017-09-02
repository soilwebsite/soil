import styled from 'styled-components'

export const Sidebar = styled.nav`
  position: fixed;
  bottom: 0;
  ${'' /* left: 0; */}
  height: 100%;
  width: ${({ theme }) => theme.spacing.sidebar};
  transition: width 1s;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .side-item {
    cursor: pointer;
    text-align: left;
    display: block;
    font-size: 12px;
    padding: 15px 30px;
    transition: opacity 1s;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #7f7f7f;
    text-decoration: none;
    &:after {
      position: absolute;
      content: '';
      left: 10px;
      right: 10px;
      bottom: -4px;
      height: 4px;
      background: #2d2d2d;
      -webkit-transition: 0.6s bottom cubic-bezier(.19, 1, .22, 1);
      -moz-transition: 0.6s bottom cubic-bezier(.19, 1, .22, 1);
      -o-transition: 0.6s bottom cubic-bezier(.19, 1, .22, 1);
      transition: 0.6s bottom cubic-bezier(.19, 1, .22, 1);
    }
    .current,
    .current:hover,
    &.active {
      color: #2d2d2d;
      background-color: #dfdfdf
    }
    &:hover {
        color: #2d2d2d;
    }

    .current:after,
    .current:hover:after,
    &:hover:after {
        bottom: 0;
    }

    .current {
        cursor: default;
    }
  }
`
