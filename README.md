# HttpReq
Basically used for http request using fetch() function, by providing a short fetching code but also flexible customizable sucess and error functions.

# Documentation

| Table of Contents |
|---|
| [Declaring URL](#declaring-url) |
| [Calling Response](#calling-response) |
| Wazzup |


## Declaring URL:
**Parameters**: ``new HttpReq(url: string)``

**Example**:
```js
const link = new HttpReq("https://jsonplaceholder.typicode.com/posts/1/comments")
```

## Calling Response
**Parameters**: ``run(method: string<"GET":"PUT">, headers: object{}, body: object/array/int/string/bool)``
