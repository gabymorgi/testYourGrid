import styled from 'styled-components'

export const Title = styled.div`
  text-align: center;
  font-size: 24px;
`

export const Result = styled.div`
  border: 3px solid #fff;
`

export const Info = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.pro ? '#0f0' : props.con ? 'red' : 'yellow'};
`