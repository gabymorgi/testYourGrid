import { Info, Result, Title } from './Styles'
import Code from '../CodePrinter'
import { Col, Row } from "antd";
import { Item, FixItem, MinMaxItem } from '../Item'
import { FlexSection, Grid } from '../Layout';

const ant = {
  code: <FlexSection direction="column" gutter={24}>
    <Row gutter={[16, 16]}>
      <Col md={24} lg={12} xl={6}><Item>Item</Item></Col>
      <Col md={24} lg={12} xl={6}><Item>Item</Item></Col>
      <Col md={24} lg={12} xl={6}><Item>Item</Item></Col>
      <Col md={24} lg={12} xl={6}><Item>Item</Item></Col>
    </Row>
    <Row gutter={[16, 16]} justify="space-between">
      <Col><FixItem>Item 150px</FixItem></Col>
      <Col><FixItem>Item 150px</FixItem></Col>
      <Col><FixItem>Item 150px</FixItem></Col>
      <Col><FixItem>Item 150px</FixItem></Col>
      <Col><FixItem>Item 150px</FixItem></Col>
    </Row>
    <Row gutter={[16, 16]} justify="space-between">
      <Col flex={1}><MinMaxItem>Item 200px - 300px</MinMaxItem></Col>
      <Col flex={1}><MinMaxItem>Item 200px - 300px</MinMaxItem></Col>
      <Col flex={1}><MinMaxItem>Item 200px - 300px</MinMaxItem></Col>
      <Col flex={1}><MinMaxItem>Item 200px - 300px</MinMaxItem></Col>
      <Col flex={1}><MinMaxItem>Item 200px - 300px</MinMaxItem></Col>
    </Row>
  </FlexSection>,
  fragment: [{
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
    <Grid md={1} lg={2} xl={4} gutter={16}>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
    </Grid>
    <Grid minWidth={150} justify="center">
      <FixItem>Item 150</FixItem>
      <FixItem>Item 150</FixItem>
      <FixItem>Item 150</FixItem>
      <FixItem>Item 150</FixItem>
      <FixItem>Item 150</FixItem>
    </Grid>
    <Grid minWidth={200} justify="center">
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
    </Grid>
    <Grid minWidth={300} justify="center">
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
      <MinMaxItem>Item 200px - 300px</MinMaxItem>
    </Grid>
  </FlexSection>,
  fragment: [{
    type: 'css',
    code: `
.grid {
  display: grid;
  grid-template-columns: repeat({columns}, 1fr);
  grid-gap: {gutter}px;
}`},{
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

const Responsive = () => {
  return <FlexSection direction="column" gutter={10}>
    <Title>Responsive Usage</Title>
    <Grid columns={2} gutter={24}>
      <div>
        <Info pro>can receive mediaquery props</Info>
        <Info pro>can fit as items as possible</Info>
        <Info waring style={{ paddingLeft: '2em' }}>
          needs to know children width, is not desirable
        </Info>
        <Info waring style={{ paddingLeft: '2em' }}>
          only admit minWidth or maxWidth
        </Info>
      </div>
      <div>
        <Info pro>can receive mediaquery props</Info>
        <Info warning>can fit as items as possible</Info>
        <Info con style={{ paddingLeft: '2em' }}>dont work properly when the grid isn't full</Info>
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

export default Responsive
