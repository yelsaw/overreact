import { createRoot } from 'react-dom/client';
import App from './App';
import './app.postcss';

// Assign container id, found in ../index.html
const appContainerId: string = 'main';
const message: string = 'Hello, ViteJS, React, TypeScript, and Tailwind! š';

const LogMessages = {
  success: {
    message: `%cā App Loaded š`, 
    style: "color:blue;font-size:20px",
  },
  failure: {
    message: `%cā App appContainerId '#${appContainerId}'š`, 
    style: "color:red;font-size:20px", 
  } 
}

const container: HTMLElement | null = document.getElementById(appContainerId);
if(!container) {
  console.log(LogMessages.failure.message, LogMessages.failure.style);
}
else {
  const AppContainer: JSX.Element = <App message={message}/>;
  createRoot(container!).render(AppContainer);
  console.log(LogMessages.success.message, LogMessages.success.style);
}
