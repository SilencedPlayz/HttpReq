class HttpReq {
  constructor(url){
    this.url = url
    this.onsuccess = false
    this.onerror = false
  }
  
  OnSuccess(func){
    this.onsuccess = func
    return this;
  }
  
  OnFail(func){
    this.onerror = func
    return this;
  }
  
  async run(method="GET", headers={}, body=null){
    let options = {method: method.toUpperCase(), headers: headers}
    if(method.toUpperCase() === "POST" && body !== null){
      options.body = typeof body === "object" ? JSON.stringify(body) : body;
      if(!headers["Content-Type"]) headers["Content-Type"] = "application/json";
    }
    try {
      const res = await fetch(this.url, options)
      const data = await res.json()
      if(this.onsuccess) this.onsuccess(data);
      else console.log(data);
      return data;
    } catch(e) {
      if(this.onerror) this.onerror(e);
      else console.error(e);
      throw e;
    }
  }
}
