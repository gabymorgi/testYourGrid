import './App.css';
import 'antd/dist/antd.css';
import styled from 'styled-components'
import { Col, Row } from 'antd';
import { Item } from './Item'
import Code from './Code';

const Section = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: black;
  color: white;
  display: grid;
  grid-gap: 20;
  grid-template: auto auto / 1fr 1fr;
  grid-template-areas: 
    "header header"
    "grid ant";
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <FlexColumn>
      <Section>
        <div>
          grid
        <Code code={`<div gutter="2" gutter={[16, 16]}>

  hola
</div>`}/>
        </div>
        <div>
          <div>ant</div>
          <Row gutter={[16, 16]}>
            <Col span={12}><Item>item</Item></Col>
            <Col span={12}><Item>item</Item></Col>
            <Col span={12}><Item>item</Item></Col>
            <Col span={12}><Item>item</Item></Col>
          </Row>
        </div>
      </Section>
    </FlexColumn>
  );
}

export default App;
