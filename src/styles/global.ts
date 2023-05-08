import { css } from '@emotion/react'

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  /* body {
    font-size: 10px;
  } */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1em;
    font-weight: normal;
    margin: 0; /* or ‘0 0 1em’ if you’re so inclined */
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    padding: 0;
  }

  em {
    font-style: normal;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`
