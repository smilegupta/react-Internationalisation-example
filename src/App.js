import logo from "./logo.svg";
import "./App.css";
import { I18nProvider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";
function App() {
  return (
    <I18nProvider locale={LOCALES.FRENCH}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FormattedMessage id="hello" />
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
