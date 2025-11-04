# HttpReq.js (v1.0)
*11/04/2025*

### In this article
> [About](#about)

> [Installation](#installation)

> [Main Class](#main-class)

> [Methods](#methods)

## About

  **Made by SilencedCode**

  Used for http request using ``fetch()`` function from js, provides less typing and quick fetching. You can also customize the functions on success and on error of fetching.

## Installation
* You can view the [CDN link](https://cdn.jsdelivr.net/gh/SilencedPlayz/HttpReq/httpreq.js)https://cdn.jsdelivr.net/gh/SilencedPlayz/HttpReq/httpreq.js) to copy the code, or call it on html using:
  ```js
  <script src="https://cdn.jsdelivr.net/gh/SilencedPlayz/HttpReq/httpreq.js"></script>
  ```

## Main Class

### HttpReq

``new HttpReq(url: string)``

The http that it will be requesting

**Parameters:**

- **url**: *string*

  The site of the hosted file

**Returns** *object* - Returns all the methods and properties

**Examples**

```js
const link = new HttpReq("https://raw.githubusercontent.com/SilencedPlayz/HttpReq/refs/heads/main/httpreq.js")
```

## Methods
* [run](#run)
* [OnSuccess](#onsuccess)
* [OnError](#onerror)

### run

``run(method?: Methods | string, headers?: object | {}, body?: any | null)``

Starting the http request to the given url

**Parameters**
- **method**?: *Method | string*

  The fetching method to use, default is GET if empty. **Method** are the "POST" and "GET", can be capitalize,lowercase,or uppercase.

- **headers**?: *object* | {}

  The headers to be sent in http request, default is *{"Content-type": "application/json"}* if its empty or {}

- **body**?: *object* | null

  The body or arguments to be sent in http request, *null* if its empty

**Returns** *object | string | Error* - returns the data from the http, returns Error if failed

**Examples**

***GETmethod.js***

```js
const link = new HttpReq("https://jsonplaceholder.typicode.com/users")
link.run() //default is GET
link.run("GET") //this is okay
```

***POSTmethod.js***

```js
const link = new HttpReq("https://jsonplaceholder.typicode.com/posts")
link.run("POST", {"Content-Type": "application/json"}, {name: "Rex"})
```

## OnSuccess

``OnSuccess((output: parameter) => {functions | nest})``

Executes the nested functions you provided if the fetch succeed

**Parameters**

- **output**: *parameter*
  
  The parameter used to return the fetched data

  **Returns** *object* | *string*
  
- **functions**: *nest*

  The nested functions to be exexuted
  

**Examples**

**GettingName.js**

```js
const users = new HttpReq("https://jsonplaceholder.typicode.com/users")
users.OnSuccess((data)=>{
  const user = data[0]
  const name = user.name
  console.log(name)
})
users.run()
```

## OnError

``OnError((error: parameter) => {functions | nest})``

Executes the functions you provided if the fetch failed

**Parameters**

- **error**: *parameter*
  
  The parameter used to return the error information

  **Returns** *string*
  
- **functions**: *nest*

  The nested functions to be executed

**Examples**

**LoggingError.js**

```js
const users = new HttpReq("https://jsonplaceholder.typicode.com/users")
users.OnError((error)=>{
  console.error(`Something went wrong: ${error}``)
})
users.run()
```
