import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${'' /* border: 1px solid lightgray; */};
`

const MiniImage = styled.div`
  cursor: pointer;
  border: 1px solid ${({ active }) => (active ? 'darkgray' : 'lightgray')};
  margin: 10px;
  width: 50px;
  height: 70px;
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
`

const Image = styled.img`
  max-height: 500px;
  max-width: 300px;
`

const Details = styled.div`
  ${'' /* border: 1px solid lightgray; */} display: flex;
  align-items: flex-end;
  flex-direction: column;
  max-height: 500px;
  width: 300px;
  span {
    padding: 10px;
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: 0 }
    this.setActive = this.setActive.bind(this)
  }
  setActive(i) {
    this.setState({ active: i })
  }

  render() {
    let { items, selected } = this.props
    let { active } = this.state

    return (
      <Container>
        <Images>
          {items[selected].images.map(({ src }, i) => (
            <MiniImage key={i} src={src} active={active === i} onClick={() => this.setActive(i)} />
          ))}
        </Images>
        <Image src={items[selected].images[active].src} />
        <Details>
          <span>Item: {items[selected].title}</span>
          {items[selected].price && <span>Price: ${items[selected].price}</span>}
        </Details>
      </Container>
    )
  }
}
