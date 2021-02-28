import 'antd/dist/antd.css';
import styled from 'styled-components'
import { FlexSection } from './Layout';
import Basic from './Comparisions/Basic';
import Spandability from './Comparisions/Spandability'
import Responsive from './Comparisions/Responsive'
import { useEffect } from 'react';

const Section = styled.div`
  min-height: 100vh;
  min-width: 992px;
  padding: 20px;
  background-color: black;
  color: white;
`

function App() {
  useEffect(() => {
    document.title = "Test your grid"
  }, []);
  return (
    <Section>
      <FlexSection direction='column' gutter={16}>
        <img style={{margin: 'auto'}} src={process.env.PUBLIC_URL + '/test.gif'}/>
        <Basic />
        <Spandability />
        <Responsive />
        {/**
         * responsive
         *    both: could support different layouts
         *    grid pro: could adapt amount of columns based on child width
         * 
         * flex
         *    grid con: you need a different Grid template on each example
         *    ant pro: could receive flex props
         */}
      </FlexSection>
    </Section>
  );
}

export default App;
