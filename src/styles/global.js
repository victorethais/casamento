import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap');

    * {
        border: 0;
        box-sizing: border-box;
        font-family: 'Comfortaa', cursive;
        margin: 0;
        outline: none !important;
        padding: 0;

        ::before,
        ::after {
            box-sizing: inherit;
        }

        ::-moz-selection {
            background-color: ${Colors.primary};
            color: ${Colors.white};
        }

        ::selection {
            background-color: ${Colors.primary};
            color: ${Colors.white};
        }
    }

    body,
    html {
        color: ${Colors.grey};
        background-color: ${Colors.white};
        font-size: 16px;
        margin: 0 auto;
        max-width: 600px;
    }

    body {
        padding: 0 20px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Great Vibes', cursive;
        font-weight: 400;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    textarea {
        resize: none;
    }

    form {
        label {
            display: block;
            font-size: 14px;
            margin-bottom: 8px;
        }

        input, textarea {
            border-radius: 4px;
            display: block;
            font-size: 20px;
            font-weight: 300;
            padding: 16px 12px;
            width: 100%;

            &::placeholder {
                opacity: .6;
            }
        }

        textarea {
            height: 150px;
        }

        span {
            color: ${Colors.danger};
            display: block;
            margin-top: 8px;
            padding-left: 8px;
        }

        button[type="submit"] {
            background-color: ${Colors.primary};
            border-radius: 4px;
            cursor: pointer;
            color: ${Colors.white};
            font-size: 20px;
            padding: 12px 32px;
            transition: .15s ease-in-out;
        }
    }
`;

export default GlobalStyle;
