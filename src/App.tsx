import FirstComponent from './Components/FirstComponent';
// import 'styled-components';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styled-componentss/GlobalStyles';
import { defaultTheme } from './themes/defaultTheme';
import { Helmet } from 'react-helmet';


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
        </Helmet>
      <div>
        <FirstComponent/>
      </div>
    </ThemeProvider>
  )
}

export default App;

