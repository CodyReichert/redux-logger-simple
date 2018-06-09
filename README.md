# Redux Logger Simple

A (simple) Redux middleware to log actions and state to the console
when actions are dispatched.

## Installation

**Install package**

```
npm i redux-logger-simple
```

**Add middleware**

```
import logger from 'redux-logger-simple'

// Add logger to `createStore` middlewares
createStore(
    ...,
    ...,
    ...applyMiddleware(...<other middleware>, logger)
)
```

## License
MIT

---

> [codys.club](http://codys.club) &nbsp;&middot;&nbsp;
> GitHub [@CodyReichert](https://github.com/CodyReichert) &nbsp;&middot;&nbsp;
> Twitter [@CodyReichert](https://twitter.com/CodyReichert)
