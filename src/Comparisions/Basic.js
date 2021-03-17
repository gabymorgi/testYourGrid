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
      <Col span={12}><Item>Item</Item></Col>
      <Col span={12}><Item>Item</Item></Col>
      <Col span={12}><Item>Item</Item></Col>
      <Col span={12}><Item>Item</Item></Col>
      <Col span={12}><Item>Item</Item></Col>
      <Col span={12}><Item>Item</Item></Col>
    </Row>
    <Row gutter={[12, 24]}>
      <Col span={6}><Item>Item</Item></Col>
      <Col span={6}><Item>Item</Item></Col>
      <Col span={6}><Item>Item</Item></Col>
      <Col span={6}><Item>Item</Item></Col>
      <Col span={6}><Item>Item</Item></Col>
      <Col span={6}><Item>Item</Item></Col>
    </Row>
    <Row gutter={4}>
      <Col flex="0 1 20%"><Item>Item</Item></Col>
      <Col flex="0 1 20%"><Item>Item</Item></Col>
      <Col flex="0 1 20%"><Item>Item</Item></Col>
      <Col flex="0 1 20%"><Item>Item</Item></Col>
      <Col flex="0 1 20%"><Item>Item</Item></Col>
      <Col flex="0 1 20%"><Item>Item</Item></Col>
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
  <Col span={12}><Item>Item</Item></Col>
  <Col span={12}><Item>Item</Item></Col>
  <Col span={12}><Item>Item</Item></Col>
  <Col span={12}><Item>Item</Item></Col>
  <Col span={12}><Item>Item</Item></Col>
  <Col span={12}><Item>Item</Item></Col>
</Row>
<Row gutter={[12, 24]}>
  <Col span={6}><Item>Item</Item></Col>
  <Col span={6}><Item>Item</Item></Col>
  <Col span={6}><Item>Item</Item></Col>
  <Col span={6}><Item>Item</Item></Col>
  <Col span={6}><Item>Item</Item></Col>
  <Col span={6}><Item>Item</Item></Col>
</Row>
<Row gutter={4}>
  <Col flex="0 1 20%"><Item>Item</Item></Col>
  <Col flex="0 1 20%"><Item>Item</Item></Col>
  <Col flex="0 1 20%"><Item>Item</Item></Col>
  <Col flex="0 1 20%"><Item>Item</Item></Col>
  <Col flex="0 1 20%"><Item>Item</Item></Col>
  <Col flex="0 1 20%"><Item>Item</Item></Col>
</Row>`
  }]
}

const grid= {
  code: <FlexSection direction="column" gutter={24}>
    <Grid columns={2} gutter={16}>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
    </Grid>
    <Grid columns={4} gutter={[12, 24]}>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
    </Grid>
    <Grid columns={5} gutter={4}>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
    </Grid>
  </FlexSection>,
  fragment: [{
    type: 'css',
    code: `
.grid {
  display: grid;
  grid-template-columns: repeat({columns}, 1fr);
  grid-gap: {gutter}px {gutter?}px;
}`},{
    type: 'html',
    code:`
<Grid columns={2} gutter={16}>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
</Grid>
<Grid columns={4} gutter={[12, 24]}>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
</Grid>
<Grid columns={5} gutter={4}>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
</Grid>`
  }]
}

const Basic = () => {
  return <FlexSection direction="column" gutter={10}>
    <Title>Basic Usage</Title>
    <Grid columns={2} gutter={24}>
      <div>
        <Info warning>Supported by almost any browser (but nobody cares IE)</Info>
        <Info pro>Support any amount of columns</Info>
        <Info pro>Don't need extra components</Info>
      </div>
      <div>
        <Info pro>Supported by any browser</Info>
        <Info warning>Is limited by the 24 column system</Info>
        <Info pro style={{ paddingLeft: '2em' }}>It could be fixed by flex param</Info>
        <Info con>Needs a Col wrapper on each item to works</Info>
        <Info con>Each col must have a prop to fill the space</Info>
        <Info con>Use weird tricks like negative margins</Info>
      </div>
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

export default Basic
