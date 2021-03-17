import styled from 'styled-components'

const beautyColors = [
  "#FFB5E8", "#FF9CEE", "#FFCCF9", "#FCC2FF", "#F6A6FF",
  "#B28DFF", "#C5A3FF", "#D5AAFF", "#ECD4FF", "#FBE4FF",
  "#DCD3FF", "#A79AFF", "#B5B9FF", "#97A2FF", "#AFCBFF",
  "#AFF8DB", "#C4FAF8", "#85E3FF", "#ACE2FF", "#6EB5FF",
  "#BFFCC6", "#DBFFD6", "#F3FFE3", "#E7FFAC", "#FFFFD1",
  "#FFC9DE", "#FFABAB", "#FFBEBC", "#FFCBC1", "#FFF5BA",
]

const StItem = styled.div`
  ${console.log(parseInt(Math.random() * beautyColors.length))}
  position: relative;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${(props) => props.bgcolor};
  padding: 10px; 
  color: black;
  font-weight: bolder;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:before {
    content: " ";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 10px solid;
    border-radius: 8px;
    border-top-color:  #ffffffa0;
    border-left-color:  #ffffffa0;
    border-bottom-color:  #00000040;
    border-right-color:  #00000040;
  }
`

const StItemW = styled(StItem)`
  ${props => props.width && `width: ${props.width}px;`}
  ${props => props.minwidth && `min-width: ${props.minwidth}px;`}
  ${props => props.maxwidth && `max-width: ${props.maxwidth}px;`}
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: unset;
  text-overflow: unset;
  overflow: unset;
`

export const Item = (props) => {
  return <StItem {...props} bgcolor={beautyColors[parseInt(Math.random() * beautyColors.length)]}>
    {props.children}
  </StItem>
}

export const MinMaxItem = (props) => {
  return <StItemW {...props} maxwidth={300} minwidth={200} bgcolor={beautyColors[parseInt(Math.random() * beautyColors.length)]}>
    {props.children}
  </StItemW>
}

export const FixItem = (props) => {
  return <StItemW {...props} width={150} bgcolor={beautyColors[parseInt(Math.random() * beautyColors.length)]}>
    {props.children}
  </StItemW>
}
