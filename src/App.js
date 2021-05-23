import { HashRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout />
    </Router>
  );
}

export default App;
