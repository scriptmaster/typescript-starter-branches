import React from "react";
import { render } from "react-dom";

import App from "../react/web/AppComponent";


let props = { origin: "Browser" };

// render(<App {...props} />, document.getElementById('root'));
render(<div>Hello BrowserSync, fast !<App { ... props} /></div>, document.getElementById('root'));
