import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const res = {
  MIN_SM_SIZE: 576,
  MIN_MD_SIZE: 768,
  MIN_LG_SIZE: 992,
  MIN_XL_SIZE: 1200,
  MIN_XXL_SIZE: 1600,
}

const Cell = styled.div`
  display: grid;
  ${props => props.span && `grid-column: auto/ span ${props.span};`}
  ${props => props.vspan && `grid-row: auto/ span ${props.vspan};`}
`

const StyledGrid = styled.div`
  display: grid;
  ${(props) => props.width && `grid-template-columns: repeat(auto-fill, ${props.width}px);`}
  ${(props) => props.minWidth && `grid-template-columns: repeat(auto-fill, minmax(${props.minWidth}px, 1fr));`}
  ${(props) => props.maxWidth && `grid-template-columns: repeat(auto-fill, minmax(1fr, ${props.maxWidth}px));`}
  ${props => (props.columns || props.xs) && `grid-template-columns: repeat(${props.columns || props.xs || 1}, 1fr);`}
  ${props => props.sm &&
    `@media (min-width: ${res.MIN_SM_SIZE}px) {
      grid-template-columns: repeat(${props.sm}, 1fr);
    }`
  }
  ${props => props.md && 
    `@media (min-width: ${res.MIN_MD_SIZE}px) {
      grid-template-columns: repeat(${props.md}, 1fr);
    }`
  }
  ${props => props.lg &&
    `@media (min-width: ${res.MIN_LG_SIZE}px) {
      grid-template-columns: repeat(${props.lg}, 1fr);
    }`
  }
  ${props => props.xl &&
    `@media (min-width: ${res.MIN_XL_SIZE}px) {
      grid-template-columns: repeat(${props.xl}, 1fr);
    }`
  }
  ${props => props.xxl &&
    `@media (min-width: ${res.MIN_XXL_SIZE}px) {
      grid-template-columns: repeat(${props.xxl}, 1fr);
    }`
  }
  ${(props) =>
    props.gutter
      ? Array.isArray(props.gutter)
        ? `grid-gap: ${props.gutter[1]}px ${props.gutter[0]}px;`
        : `grid-gap: ${props.gutter}px;`
      : undefined}
  ${(props) => props.justify && `justify-items: ${props.justify}`}
`

/**
 * if minWidth is provided, the columns will grow until a new column can be created
 * if not, you could use ant-like props as xs, md, lg etc.
 * but GRID IS NOT A 24 SECTION SYSTEM, so you must send directly the number of columns that you want
 * Eg.
 * ╔════════════════╦═════════════════╗
 * ║      Grid      ║       Ant       ║
 * ╠════════════════╬═════════════════╣
 * ║ xs={2}         ║ xs={12}         ║
 * ║ md={4}         ║ md={6}          ║
 * ║ lg={6}         ║ lg={4}          ║
 * ║ xl={24}        ║ xl={1}          ║
 * ║ columns={8}    ║ span={3}        ║
 * ║ columns={5}    ║ -Not available- ║
 * ╚════════════════╩═════════════════╝
 */
export const Grid = (props) => {
  if (props.loading) {
    return (
      <div className="flex justify-center">
        <Spin size="large" />
      </div>
    )
  }

  return <StyledGrid {...props}>{props.children}</StyledGrid>
}

Grid.Cell = Cell

export const FlexSection = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  > *:not(:last-child) {
    ${props => props.direction === 'column'
      ? `margin-bottom: ${props.gutter}px;`
      : `margin-right: ${props.gutter}px;`}
  } 
`
