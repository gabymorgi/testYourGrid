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
  overflow: auto;

  > * {
    white-space: nowrap;
  }
`

const Empty = (props) => <>{Array(props.width).fill(false).map((_, i) => <span key={i}>&nbsp;</span>)}</>

const TagSymbol = styled.span`
  color: #79c0ff;
`

const Tag = styled.span`
  color: #7ee787;
`

const Text = styled.span`
  color: #c9d1d9;
`

const TextString = styled.span`
  color: #d5a6a6;
`

const ParamString = styled.span`
  color: yellow;
`

const VerticalEmpty = styled.div`
  height: 1em;
  width: 100%;
`

const HtmlCode = (props) => {
  return <div>
    {props.code.split('\n').map((line) => {
      console.log(line)
      const nodes = []
      if (line.length > 0) {
        while (line.length) {
          //separo por <
          let [p1, p2] = split2s(line, '<')
          //convierto espacio en padding
          if (p1.length) {
            nodes.push(<Empty width={p1.length - p1.trim().length}/>)
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
                nodes.push(<Empty width={1} />)
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
                nodes.push(<Empty width={1} />)
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
      return <div>
        {nodes}
      </div>
    })}
  </div>
}

const CssCode = (props) => {
  return <div>
    {props.code.split('\n').map((line) => {
      console.log(line)
      const nodes = []
      if (line.length > 0) {
        nodes.push(<Empty width={line.length - line.trim().length}/>)
        line = line.trim()
        if (hasChar(line, ':')) {
          let [p1, p2] = split2s(line, ':')
          nodes.push(<TagSymbol>{p1}:</TagSymbol>)
          while (hasChar(p2, '{')) {
            ;[p1, p2] = split2s(p2, '{')
            nodes.push(<TextString>{p1}</TextString>)
            ;[p1, p2] = split2s(p2, '}')
            nodes.push(<ParamString>{`{${p1}}`}</ParamString>)
          }
          nodes.push(<TextString>{p2}</TextString>)
        }
        else if (hasChar(line, '{') || hasChar(line, '}')) {
          nodes.push(<Text>{line}</Text>)
        }
        else {
          nodes.push(<TextString>{line}</TextString>)
        }
      }
      else {
        nodes.push(<VerticalEmpty />)
      }
      return <div>
        {nodes}
      </div>
    })}
  </div>
}

const CodePrinter = (props) => {
  return <StyledCode>
    {props.codeFragments.map((fragment) => {
      switch (fragment.type) {
        case 'css': return <CssCode code={fragment.code}/>
        case 'html': return <HtmlCode code={fragment.code}/>
        default: return null
      }
    })}
  </StyledCode>
}

export default CodePrinter
