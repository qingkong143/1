// 定义一个变量来存储访问令牌，可以在服务器端生成并传递给客户端

var accessToken = "your_access_token";

// 定义一个函数来检查请求头中的 User-Agent 是否为爬虫程序

function checkCrawler() {

  var userAgent = navigator.userAgent;
  if (/crawl|spider|bot|data-scraper/i.test(userAgent)) {

    return false;

  } else {

    return true;

  }

}

// 定义一个函数来检查请求 URL 是否包含敏感信息或非法字符

function checkUrl() {

  var url = window.location.href;

  if (url.indexOf("?") > 0) {

    url = url.substring(0, url.indexOf("?"));

  }

  if (url.indexOf("#") > 0) {

    url = url.substring(0, url.indexOf("#"));

  }

  if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {

    url = "http://" + url;

  }
  if (url.indexOf("/admin/") >= 0 || url.indexOf("/api/") >= 0 || url.indexOf("/css/") >= 0 || url.indexOf("/js/") >= 0 || url.indexOf("/img/") >= 0 || url.indexOf("/fonts/") >= 0 || url.indexOf("/data/") >= 0 || url.indexOf("/logs/") >= 0 || url.indexOf("/tmp/") >= 0 || url.indexOf("/public/") >= 0 || url.indexOf("/themes/") >= 0 || url.indexOf("/source/") >= 0 || url.indexOf("/_book/") >= 0 || url.indexOf("/_posts/") >= 0 || url.indexOf("/_pages/") >= 0 || url.indexOf("/_tags/") >= 0 || url.indexOf("/_config.yml") >= 0 || url.indexOf("/README.md") >= 0 || url.indexOf("/LICENSE.md") >= 0 || url.indexOf("/CHANGELOG.md") >= 0 || url.indexOf("/.htaccess") >= 0 || url.indexOf("/sitemap.xml") >= 0 || url.indexOf("/rss2.xml") >= 0 || url.indexOf("/atom.xml") >= 0 || url.indexOf("/favicon.ico") >= 0) {

    url = ""; // 如果 URL 包括敏感信息或非法字符，则将其设置为空字符串，以防止被爬取或盗链。

 }

 return url;

}

// 在页面加载完成后，调用 checkCrawler()、checkUrl() 函数进行反爬虫和防盗链处理。如果返回值为 false,则禁止访问该页面。

window.onload = function() {

 if (!checkCrawler()) {

     alert("请不要使用爬虫程序访问本页面！");

     window.close(); // 如果用户是爬虫程序，则关闭该页面。

     return;

    } else if (!checkUrl()) {

     alert("请不要在页面中包含敏感信息或非法字符！");

     window.close(); // 如果用户输入了敏感信息或非法字符，则关闭该页面。

     return;

    } else