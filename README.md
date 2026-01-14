```npm i axios```
```npm i react-router```
```npm install @reduxjs/toolkit react-redux```

#


Create your project
Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

Terminal

npm create vite@latest my-project
cd my-project
02
Install Tailwind CSS
Install tailwindcss and @tailwindcss/vite via npm.

Terminal

npm install tailwindcss @tailwindcss/vite

### Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.

```vite.config.ts```

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})


### Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.
```@import "tailwindcss";```


Tenor is shutting down its Tenor API.
After June 30, 2026 → The API will stop completely and all requests will return errors
