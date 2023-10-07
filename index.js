// This package supports rate limiting...
// 1) globally
// 2) per router
// 3) per route

// Configuration
// 1) use a database
// 2) use memory (default)

// each user gets a bucket
// each bucket has x tokens
// bucket refills to full every y milliseconds
// requests are ignored after x tokens run out
exports.tokenBucket = function (x, y, getTokenInfo, setTokenInfo) {

    return () => {
        tokenInfo = getTokenInfo()
    }
}

// each user gets a window
// the window supports x requests
// the window resets every y milliseconds
// ignores requests after reaching the initial x requests in a window
exports.fixedWindow = function (x, y) {

}

// each user gets a log of requests
// the log stores x requests
// the log discards requests that are y milliseconds old 
exports.slidingLog = function (x, y) {

}

// each user has two windows
// the current window and the previous window
// we allow x requests every y milliseconds
// for each request we calculate how far we have progressed in the current window
// then we multiply current count by progess and previous count by 1 - progess
// we allow a log through if count (truncated) is less than x
exports.slidingWindow = function (x, y) {

}