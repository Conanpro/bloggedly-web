import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'

export default createGlobalStyle`
    ${normalize}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body,
    html {
        height: 100%;
        margin: 0;
    }

    body {
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: url('https://img.freepik.com/free-photo/white-simple-textured-design-background_53876-97408.jpg?size=338&ext=jpg');
        line-height: 1.4;
    }

    .cta {
        background-color: inherit;
        border: 0;
    }

    .logo {
        border-radius: 50%;
    }

    a:link,
    a:visited {
        color: #0077cc;
    }

    a:hover,
    a:focus {
        color: #004499;
    }

    code,
    pre {
        max-width: 100%;
    }
`