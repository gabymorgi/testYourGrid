import './App.css';
import 'antd/dist/antd.css';
import styled from 'styled-components'
import { Col, Row } from 'antd';

const Section = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-color: black;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Item = styled.div`
  position: relative;
  border: 1px solid black;
  border-radius: 8px;
  background-color: red;
  padding: 10px; 
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
    border-top-color:  #ffffff80;
    border-left-color:  #ffffff80;
    border-bottom-color:  #00000040;
    border-right-color:  #00000040;
  }
`

function App() {
  return (
    <Section>
      <div>
        grid
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
  );
}

export default App;
