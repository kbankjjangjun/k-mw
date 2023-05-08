import { colors } from '@/constants/colors'
import classnames from 'classnames'
import React, {
  ReactNode,
  AllHTMLAttributes,
  forwardRef,
  Ref,
  CSSProperties,
} from 'react'

export type Typography =
  | 't1'
  | 't2'
  | 't3'
  | 't4'
  | 't5'
  | 't6'
  | 't7'
  | 't8'
  | 't9'
  | 't10'

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold'

export type KSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {})

type Trans = React.CSSProperties['textTransform']

export interface BaseProps {
  children?: ReactNode
  className?: string
  typography?: Typography
  fontWeight?: FontWeight
  color?: string
  ellipsisAfterLines?: number
  stringToJSX?: boolean
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']

  /**
   * @description word-break: keep-all을 적용할지 여부를 나타냅니다.
   * @default true
   */
  wordBreak?: boolean
  /**
   * @deprecated
   */
  spanAttributes?: AllHTMLAttributes<any>
}

export type Props = BaseProps

type TextProps<Element extends keyof JSX.IntrinsicElements = 'span'> =
  BaseProps & {
    as?: Element
  } & Omit<AllHTMLAttributes<Element>, 'as'>

function Text<Element extends keyof JSX.IntrinsicElements = 'span'>(
  props: TextProps<Element>,
  ref: Ref<HTMLElement>
) {
  const {
    as: Component = 'span',
    className,
    children,
    ellipsisAfterLines,
    typography,
    fontWeight,
    color = colors.grey900,
    stringToJSX,
    display = 'inline-block',
    textAlign,
    style,
    spanAttributes,
    wordBreak = true,
    role,
    ...rest
  } = props as TextProps

  const isSingleLine =
    ellipsisAfterLines !== undefined && ellipsisAfterLines === 1
  const isMultiLine = ellipsisAfterLines !== undefined && ellipsisAfterLines > 1

  return (
    <Component
      ref={ref}
      role={role ?? (Component === 'span' ? 'text' : undefined)}
      {...rest}
      {...(spanAttributes as any)}
      className={classnames(
        'text',
        {
          'text--single-line': isSingleLine,
          'text--multi-line': isMultiLine,
          'text--word-break': isSingleLine ? false : wordBreak,
          [`typography-${typography}`]: typography,
          [`text--font-weight--${fontWeight}`]: fontWeight,
          [`text--display-${display}`]:
            display && !isSingleLine && !isMultiLine,
          [`text--as`]: Component !== 'span',
        },
        className
      )}
      style={{
        color,
        WebkitLineClamp: isMultiLine ? ellipsisAfterLines : undefined,
        textAlign,
        ...style,
      }}
    >
      {stringToJSX === true && typeof children === 'string'
        ? convertNewLineToJSX(children)
        : children}
    </Component>
  )
}

export default forwardRef(Text)

function convertNewLineToJSX(str: string) {
  return str.split('\\n').map((line, index) => (
    <React.Fragment key={index}>
      {index > 0 ? <br /> : ''}
      {line}
    </React.Fragment>
  ))
}
