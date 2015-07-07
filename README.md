proxyserver
=======

`npm install -g proxyserver`

`proxyserver` is an HTTP programmable proxying command line library that supports
websockets. It is suitable for implementing components such as
proxies.

### Core Concept

A new proxy is created by calling `proxyserver` and passing
an `options`

```javascript
proxyserver --to http://localhost:4444 --port 8080
```

An object will be returned with four values:

* `to` options allows to define destination IP-ADDRESS:PORT
* `port` options allows to define localhost PORT NUMBER

### License

>The MIT License (MIT)
>
>Copyright (c) 2014 - 2015
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in
>all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>THE SOFTWARE.


