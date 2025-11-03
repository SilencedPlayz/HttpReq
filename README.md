# HttpReq
Basically used for http request using fetch() function, by providing a short fetching code but also flexible customizable sucess and error functions.

# Documentation

| Table of Contents |
|---|
| [new HttpReq()](#new-httpreq) |
| [run()](#run) |
| Wazzup |


## new HttpReq():
**Parameters**:
```js
new HttpReq(url: string)
```

**Example**:
```js
const link = new HttpReq("https://jsonplaceholder.typicode.com/posts/1/comments")
```

## run()
**Parameters**:
```js
run(method: string<"GET":"PUT">, headers: object{}, body: object/array/int/string/bool)
```
**Examples**
<details>
  <summary> GET method</summary>
  
  ```js
  //default is GET
  new HttpReq("https://jsonplaceholder.typicode.com/posts/1/comments").run()
  //optional
  new HttpReq("https://jsonplaceholder.typicode.com/posts/1/comments").run("GET")
  ```
</details>
