# Advanced-React

frontend

## Next.js

### [`Link`](https://github.com/zeit/next.js/#with-link-1)

### [`App`](https://github.com/zeit/next.js/#custom-app)

－ Persisting layout between page changes
－ Keeping state when navigating pages
－ Custom error handling using componentDidCatch
－ Inject additional data into pages (for example by processing GraphQL queries)

### [`Head`](https://github.com/zeit/next.js/#populating-head)

自定义 Meta 等头部内容

### Custom <Document>

解决服务端渲染首次渲染由于 CSS 未载入会出现闪烁的现象。

基本上就是在 render 之前遍历组件树，从而获取到整个 style。

> [Example app with styled-components](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components)
