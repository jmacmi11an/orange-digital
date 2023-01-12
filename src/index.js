import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { css } from "@emotion/react"
import Button from '@mui/material/Button';
import App from "./App.js";

// const App = () => {
//   return (
//     <Button
//     css={css`
//              margin-left: 10px;
//         `}
//         variant="contained" color="primary">
//       Orange Digital Test
//     </Button>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
