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
      const contentType = res.headers.get("Content-type") || ""
      console.log(contentType)
      let data;
      
      if(contentType.includes("application/json")){
        data = await res.json()
      }else{
        data = await res.text()
      }
      
      if(this.onsuccess) this.onsuccess(data);
      else console.log(data);
      return data;
    } catch(e) {
      if(this.onerror) this.onerror(e);
      else console.log(e);
    }
  }
}
