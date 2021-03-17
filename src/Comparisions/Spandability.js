import { Info, Result, Title } from './Styles'
import Code from '../CodePrinter'
import { Col, Row as AntRow } from "antd";
import { Item } from '../Item'
import { FlexSection, Grid } from '../Layout';
import styled from 'styled-components'

const Row = styled(AntRow)`
  .ant-col {
    background-color: #00ff00;
  }
`

const ant = {
  code: <FlexSection direction="column" gutter={24}>
    <Row gutter={[16, 16]}>
      <Col span={3}><Item>Item-3</Item></Col>
      <Col span={5}><Item>Item-5</Item></Col>
      <Col span={7}><Item>Item-7</Item></Col>
      <Col span={9}><Item>Item-9</Item></Col>
      <Col span={8}><Item>Item-8</Item></Col>
      <Col span={20}><Item>Item-20</Item></Col>
      <Col span={3}><Item style={{ textOrientation: 'upright', writingMode: 'vertical-rl' }}>I 3x2</Item></Col>
      <Col span={10}><Item>Item-10</Item></Col>
    </Row>
  </FlexSection>,
  fragment: [{
    type: 'css',
    code: `
.ant-col {
  background-color: #00ff00;
}`},{
    type: 'html',
    code:`
<Row gutter={[16, 16]}>
  <Col span={3}><Item>Item-3</Item></Col>
  <Col span={5}><Item>Item-5</Item></Col>
  <Col span={7}><Item>Item-7</Item></Col>
  <Col span={9}><Item>Item-9</Item></Col>
  <Col span={8}><Item>Item-8</Item></Col>
  <Col span={20}><Item>Item-20</Item></Col>
  <Col span={3}>
    <Item style="text-orientation: upright; writing-mode: vertical-rl">
      I 3x2
    </Item>
  </Col>
  <Col span={10}><Item>Item-10</Item></Col>
</Row>`
  }]
}


const grid= {
  code: <FlexSection direction="column" gutter={24}>
    <Grid columns={24} gutter={16}>
      <Grid.Cell span={3}><Item>Item-3</Item></Grid.Cell>
      <Grid.Cell span={5}><Item>Item-5</Item></Grid.Cell>
      <Grid.Cell span={7}><Item>Item-7</Item></Grid.Cell>
      <Grid.Cell span={9}><Item>Item-9</Item></Grid.Cell>
      <Grid.Cell span={8}><Item>Item-8</Item></Grid.Cell>
      <Grid.Cell span={20}><Item>Item-20</Item></Grid.Cell>
      <Grid.Cell span={3} vspan={2}><Item style={{ textOrientation: 'upright', writingMode: 'vertical-rl' }}>I 3x2</Item></Grid.Cell>
      <Grid.Cell span={10}><Item>Item-10</Item></Grid.Cell>
    </Grid>
  </FlexSection>,
  fragment: [{
    type: 'css',
    code: `
.grid {
  display: grid;
  grid-template-columns: repeat({columns}, 1fr);
  grid-gap: {gutter}px;
}
.cell {
  display: grid;
  grid-column: auto/ span {span};
  grid-row: auto/ span {vspan};
}
`},{
    type: 'html',
    code:`
<Grid columns={24} gutter={16}>
  <Grid.Cell span={3}><Item>Item-3</Item></Grid.Cell>
  <Grid.Cell span={5}><Item>Item-5</Item></Grid.Cell>
  <Grid.Cell span={7}><Item>Item-7</Item></Grid.Cell>
  <Grid.Cell span={9}><Item>Item-9</Item></Grid.Cell>
  <Grid.Cell span={8}><Item>Item-8</Item></Grid.Cell>
  <Grid.Cell span={20}><Item>Item-20</Item></Grid.Cell>
  <Grid.Cell span={3} vspan={2}>
    <Item style="text-orientation: upright; writing-mode: vertical-rl">
      I 3x2
    </Item>
  </Grid.Cell>
  <Grid.Cell span={10}><Item>Item-10</Item></Grid.Cell>
</Grid>`
  }]
}

const Spandability = () => {
  return <FlexSection direction="column" gutter={10}>
    <Title>Span-dability</Title>
    <Grid columns={2} gutter={24}>
      <div>
        <Info con>Needs extra component</Info>
        <Info pro>It works with vertical span*</Info>
        <Info con>Needs some tricks in some cases:</Info>
        <Info con style={{ paddingLeft: '2em' }}>
          On firefox overflow doesn't work properly, it need an&nbsp;
          <span style={{ fontFamily: 'monospace' }}>overflow:auto</span>&nbsp;
          or&nbsp;
          <span style={{ fontFamily: 'monospace' }}>display:grid</span>&nbsp;
          on the cell component
        </Info>
        <Info warning style={{ paddingLeft: '2em' }}>
          *to fill vertical available space with v span cell needs to&nbsp;
          <span style={{ fontFamily: 'monospace' }}>display:grid</span>
        </Info>
      </div>
      <div>
        <Info pro>It works as always</Info>
      </div>
      <Grid.Cell span={2}>
        <Info waring style={{ textAlign: 'center' }}>in my experience, on 90% of the cases using this functionality is a sympthom of a poor layout design</Info>
      </Grid.Cell>
      <Code codeFragments={grid.fragment} />
      <Code codeFragments={ant.fragment} />
      <Result>
        {grid.code}
      </Result>
      <Result>
        {ant.code}
      </Result>
    </Grid>
  </FlexSection>
}

export default Spandability
