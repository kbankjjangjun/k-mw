import { css } from '@emotion/react'

export default function Box({ title, children, ...props }: any) {
  return (
    <div
      css={css`
        padding: 1.5rem;
      `}
    >
      {children}
    </div>
  )
}
