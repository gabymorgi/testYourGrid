import * as res from '~/uikit/Resolutions'
import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

/**
 * export const MAX_XS_SIZE = 575
export const MIN_SM_SIZE = 576
export const MAX_SM_SIZE = 767
export const MIN_MD_SIZE = 768
export const MAX_MD_SIZE = 991
export const MIN_LG_SIZE = 992
export const MAX_LG_SIZE = 1199
export const MIN_XL_SIZE = 1200
export const MAX_XL_SIZE = 1599
export const MIN_XXL_SIZE = 1600
 */

const StyledGrid = styled.div`
  display: grid;
  ${(props) =>
    props.minWidth
      ? `grid-template-columns: repeat(auto-fill, minmax(${props.minWidth}px, 1fr));`
      : `
    grid-template-columns: ${props.span || props.xs || 1}fr;
    ${
      props.sm && props.sm > 0
        ? `@media (min-width: ${res.MIN_SM_SIZE}px) {
        grid-template-columns: repeat(${props.sm}, 1fr);
      }`
        : ''
    }
    ${
      props.md && props.md > 0
        ? `@media (min-width: ${res.MIN_MD_SIZE}px) {
        grid-template-columns: repeat(${props.md}, 1fr);
      }`
        : ''
    }
    ${
      props.lg && props.lg > 0
        ? `@media (min-width: ${res.MIN_LG_SIZE}px) {
        grid-template-columns: repeat(${props.lg}, 1fr);
      }`
        : ''
    }
    ${
      props.xl && props.xl > 0
        ? `@media (min-width: ${res.MIN_XL_SIZE}px) {
        grid-template-columns: repeat(${props.xl}, 1fr);
      }`
        : ''
    }
    ${
      props.xxl && props.xxl > 0
        ? `@media (min-width: ${res.MIN_XXL_SIZE}px) {
        grid-template-columns: repeat(${props.xxl}, 1fr);
      }`
        : ''
    }
  `}
  ${(props) =>
    props.gutter
      ? Array.isArray(props.gutter)
        ? `grid-gap: ${props.gutter[0]}px ${props.gutter[1]}px;`
        : `grid-gap: ${props.gutter}px;`
      : undefined}
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
 * ║ span={8}       ║ span={3}        ║
 * ║ span={5}       ║ -Not available- ║
 * ╚════════════════╩═════════════════╝
 */
const Grid = (props) => {
  if (props.loading) {
    return (
      <div className="flex justify-center">
        <Spin size="large" />
      </div>
    )
  }

  return <StyledGrid {...props}>{props.children}</StyledGrid>
}

export default Grid