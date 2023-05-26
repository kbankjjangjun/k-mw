import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { Tuple } from './Tuple'
export type DefaultMantineColor =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {})
export type MantineThemeColorsOverride = {}
export type MantineThemeColors = MantineThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultMantineColor, Tuple<string, 10>>
export type MantineColor = keyof MantineThemeColors
//# sourceMappingURL=MantineColor.d.ts.map

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  radius?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  disabled?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color,
      radius = 'sm',
      size = 'sm',
      disabled = false,
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const defaultClassName = 'bg-[#0F0060] text-white p-1 rounded-md'
    const fontSize = `text-${size}`
    return (
      <button
        ref={ref}
        className={clsx(defaultClassName, fontSize, {
          'bg-[#eeeeee] text-[#B8B8B8] cursor-not-allowed': disabled,
        })}
        {...props}
      >
        <ButtonInner>{children}</ButtonInner>
      </button>
    )
  }
)

Button.displayName = '@kbank/core/Button'

// export default forwardRef(Button)

// interface ButtonProps
//   extends DetailedHTMLProps<
//     ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   > {
//   // 커스텀 속성들
//   color?: string
//   backgroundColor?: string
//   radius?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
//   size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
//   disabled?: boolean
// }

// export default function Button({
//   color,
//   backgroundColor,
//   radius = 'sm',
//   size = 'sm',
//   disabled = false,
//   children,
//   ...props
// }: ButtonProps) {
//   const defaultClassName = 'bg-[#0F0060] text-white p-1 rounded-md'
//   const fontSize = `text-${size}`
//   return (
//     <button
//       ref={props.ref}
//       className={clsx(defaultClassName, fontSize, {
//         'bg-[#eeeeee] text-[#B8B8B8] cursor-not-allowed': disabled,
//       })}
//       {...props}
//     >
//       <ButtonInner>{children}</ButtonInner>
//     </button>
//   )
// }

// export default forwardRef(Button)

function ButtonInner({ children }: any) {
  return (
    <div>
      <span>{children}</span>
    </div>
  )
}
