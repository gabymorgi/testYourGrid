import React from 'react'
import styled from 'styled-components'

function hasChar(str, char) {
  return str.indexOf(char) !== -1
}

function split2s(str, delim) {
  const p = str.indexOf(delim);
  if (p !== -1) {
      return [str.substring(0,p), str.substring(p+1)];
  } else {
      return [str];
  }
}

const StyledCode = styled.div`
  padding: 15px;
  border-radius: 5px;
  font-family: monospace;
  background-color: #111;
  border: 1px solid #888;
  font-weight: bold;
  font-size: 14px;
`

const Empty = styled.div`
  width: ${props => props.width};
`

const TagSymbol = styled.div`
  color: #79c0ff;
`

const Tag = styled.div`
  color: #7ee787;
`

const Text = styled.div`
  color: #c9d1d9;
`

const TextString = styled.div`
  color: #d5a6a6;
`

const VerticalEmpty = styled.div`
  height: 1em;
  width: 100%;
`

const Code = (props) => {
  return <StyledCode>
    {props.code.split('\n').map((line) => {
      console.log(line)
      const nodes = []
      if (line.length > 0) {
        while (line.length) {
          //separo por <
          let [p1, p2] = split2s(line, '<')
          //convierto espacio en padding
          if (p1.length) {
            nodes.push(<Empty width={`${p1.length - p1.trim().length}em`}/>)
            nodes.push(<Text>{p1.trim()}</Text>)
          }
          if (p2) {
            //escribo un <
            nodes.push(<TagSymbol>&lt;</TagSymbol>)
            //separo por >
            ;[p1, p2] = split2s(p2, '>')
            //separo por " "
            let [q1, q2] = split2s(p1, ' ')
            nodes.push(<Tag>{q1}</Tag>)
            //debugger
            if (q2) {
              //mientras hay =
              while (hasChar(q2, '=')) {
                nodes.push(<Empty width="1ex" />)
                //separo por =
                ;[q1, q2] = split2s(q2, '=')
                //escribo nombre prop y escribo =
                nodes.push(<TagSymbol>{`${q1}=`}</TagSymbol>)
                if (q2.charAt(0) === '"') {
                  ;[q1, q2] = split2s(q2.substring(1), '"')
                  nodes.push(<TextString>{`"${q1}"`}</TextString>)
                } else {
                  ;[q1, q2] = split2s(q2.substring(1), '}')
                  nodes.push(<Text>{`{${q1}}`}</Text>)
                }
              }
              if (q2.length > 0) {
                nodes.push(<Empty width="1ex" />)
                nodes.push(<TagSymbol>{q2}</TagSymbol>)
              }
            }
            nodes.push(<TagSymbol>&gt;</TagSymbol>)
          }
          line = p2 || ''
        }
      }
      else {
        nodes.push(<VerticalEmpty />)
      }
      return <div style={{ display: 'flex' }}>
        {nodes}
      </div>
    })}
  </StyledCode>
}

export default Code
