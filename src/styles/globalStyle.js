// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body, #root { height:100%; }

  body {
    font-family: 'Pretendard GOV Variable', Pretendard, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', sans-serif;
    color:#1d1d1d;
    background:#000;  /* ✅ 바깥 배경을 검정으로 */
  }
`;
export default GlobalStyle;