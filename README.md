**Install**
```
npm install express-rate-limiter
```

**Use on all routes**

in app.py
```javascript
const express = require('express')
const app = express()
const expressRateLimiter = require('express-rate-limiter')
```

*Token Bucket*
```javascript
// example of using the token bucket rate limiter
app.use(expressRateLimiter.tokenBucket())
```

*Fixed Window*
```javascript
// example of using the fixed window rate limiter
app.use(expressRateLimiter.fixedWindow())
```

*Sliding Log*
```javascript
// example of using the sliding log rate limiter
app.use(expressRateLimiter.slidingLog())
```

*Sliding Window*
```javascript
// example of using the sliding window rate limiter
app.use(expressRateLimiter.slidingWindow())
```

**Use on a router**
```javascript
const express = require('express')
const app = express()
const router = express.Router()
const expressRateLimiter = require('express-rate-limiter')

router.use(expressRateLimiter.tokenBucket())

app.use('/', router)
```

**Use on a route**
```javascript
const express = require('express')
const app = express()
const router = express.Router()
const expressRateLimiter = require('express-rate-limiter')

app.use('/users/:id', expressRateLimiter.tokenBucket())
```