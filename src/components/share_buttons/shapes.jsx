import styled from 'styled-components'

const fullSize   = '56px'
const roundSize  = '45px'
const squareSize = '30px'

const ButtonFull = styled.a`
  position: relative
  border: 1px solid ${props => props.color}
  font-weight: normal
  padding: 0
  display: flex
  align-items: center
  background-color: ${props => props.color}
  border-radius: 50px
  cursor: pointer
  flex: 1
  height: ${fullSize}

  &, &:active, &:hover, &:focus {
    color: #FFF
    text-decoration: none
  }

  &:hover {
    background-color: ${props => props.hoverColor}
  }

  &:active {
    background-color: ${props => props.activeColor}
  }

  &:focus {
    box-shadow: ${props => props.boxShadow ?
      'rgba(0, 0, 0, 0.2) 0px 3px 3px 0px, 0.2rem 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1) inset' :
      '0.2rem 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1) inset'}
  }

  ${props => props.boxShadow ? 'box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px 0px' : ''}

  div {
    border-radius: 50%
    border: 1px solid #FFF
    height: 56px
    width: 56px
    display: flex
    align-items: center
    justify-content: center
    position: relative
    left: -2px

    svg {
      width: 25px
      height: 25px
    }
  }

  span {
    flex: 1 1 0
    font-size: 18px
    font-weight: 600
    padding: 0 20px 0 10px
  }
`

const ButtonMinimal = styled.a`
  border: 1px solid ${props => props.color}
  font-weight: normal
  padding: 3px 8px
  display: flex
  align-items: flex-end
  background-color: transparent
  cursor: pointer
  width: 100px
  color: ${props => props.color}
  font-size: 12px

  &, &:active, &:hover, &:focus {
    text-decoration: none
  }

  &:hover {
    border-color: ${props => props.hoverColor}
    color: ${props => props.hoverColor}
  }

  &:active {
    border-color: ${props => props.activeColor}
    color: ${props => props.activeColor}
  }

  svg {
    width: auto
    height: 16px
    margin-right: 10px
  }

  span {
    flex: 1 1 0
    text-align: center
  }
`

const ButtonRound = styled.a`
  padding: 0
  height: ${roundSize}
  width: ${roundSize}
  display: flex
  align-items: center
  justify-content: center
  color: #FFFFFF
  border-radius: 50%
  border: none
  background-color: ${props => props.color}
  transition: background-color .1s ease
  cursor: pointer

  &, &:active, &:hover, &:focus {
    text-decoration: none
  }

  &:hover {
    background-color: ${props => props.hoverColor}
    color: #FFFFFF
  }

  &:active {
    background-color: ${props => props.activeColor}
    color: #FFFFFF
  }

  &:focus {
    box-shadow: ${props => props.boxShadow ?
      'rgba(0, 0, 0, 0.2) 0px 3px 3px 0px, 0.2rem 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1) inset' :
      '0.2rem 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1) inset'}
  }

  ${props => props.boxShadow ? 'box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px 0px' : ''}
`

const ButtonSquare = styled.a`
  padding: 0
  height: ${squareSize}
  width: ${squareSize}
  display: flex
  align-items: center
  justify-content: center
  background-color: transparent
  border: 1px solid ${props => props.color}
  transition: border .1s ease
  cursor: pointer

  &, &:active, &:hover, &:focus {
    text-decoration: none
  }

  &:hover {
    border: 1px solid ${props => props.hoverColor}
  }

  &:active {
    border: 1px solid ${props => props.activeColor}
  }

  svg {
    color: ${props => props.color}

    &:hover {
      color: ${props => props.hoverColor}

    }

    &:active {
      color: ${props => props.activeColor}
    }
  }
`

export const shapes = {
  'full':              ButtonFull,
  'minimal':           ButtonMinimal,
  'round':             ButtonRound,
  'square':            ButtonSquare,
}
