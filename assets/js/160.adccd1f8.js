(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{681:function(t,e,s){"use strict";s.r(e);var a=s(58),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" Security")]),t._v(" "),s("h2",{attrs:{id:"reporting-vulnerabilities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reporting-vulnerabilities"}},[t._v("#")]),t._v(" Reporting Vulnerabilities")]),t._v(" "),s("p",[t._v("When a vulnerability is reported, it immediately becomes our top concern, with a full-time contributor dropping everything to work on it. To report a vulnerability, please email "),s("a",{attrs:{href:"mailto:security@vuejs.org"}},[t._v("security@vuejs.org")]),t._v(".")]),t._v(" "),s("p",[t._v("While the discovery of new vulnerabilities is rare, we also recommend always using the latest versions of Vue and its official companion libraries to ensure your application remains as secure as possible.")]),t._v(" "),s("h2",{attrs:{id:"rule-no-1-never-use-non-trusted-templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-no-1-never-use-non-trusted-templates"}},[t._v("#")]),t._v(" Rule No.1: Never Use Non-trusted Templates")]),t._v(" "),s("p",[t._v("The most fundamental security rule when using Vue is "),s("strong",[t._v("never use non-trusted content as your component template")]),t._v(". Doing so is equivalent to allowing arbitrary JavaScript execution in your application - and worse, could lead to server breaches if the code is executed during server-side rendering. An example of such usage:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" userProvidedString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</div>")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NEVER DO THIS")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Vue templates are compiled into JavaScript, and expressions inside templates will be executed as part of the rendering process. Although the expressions are evaluated against a specific rendering context, due to the complexity of potential global execution environments, it is impractical for a framework like Vue to completely shield you from potential malicious code execution without incurring unrealistic performance overhead. The most straightforward way to avoid this category of problems altogether is to make sure the contents of your Vue templates are always trusted and entirely controlled by you.")]),t._v(" "),s("h2",{attrs:{id:"what-vue-does-to-protect-you"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-vue-does-to-protect-you"}},[t._v("#")]),t._v(" What Vue Does to Protect You")]),t._v(" "),s("h3",{attrs:{id:"html-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-content"}},[t._v("#")]),t._v(" HTML content")]),t._v(" "),s("p",[t._v("Whether using templates or render functions, content is automatically escaped. That means in this template:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ userProvidedString }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("if "),s("code",[t._v("userProvidedString")]),t._v(" contained:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<script>alert(\"hi\")<\/script>'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("then it would be escaped to the following HTML:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("alert("),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v(")"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("/script"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("thus preventing the script injection. This escaping is done using native browser APIs, like "),s("code",[t._v("textContent")]),t._v(", so a vulnerability can only exist if the browser itself is vulnerable.")]),t._v(" "),s("h3",{attrs:{id:"attribute-bindings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attribute-bindings"}},[t._v("#")]),t._v(" Attribute bindings")]),t._v(" "),s("p",[t._v("Similarly, dynamic attribute bindings are also automatically escaped. That means in this template:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  hello\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("if "),s("code",[t._v("userProvidedString")]),t._v(" contained:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\" onclick=\"alert(\\'hi\\')'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("then it would be escaped to the following HTML:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v(" onclick="),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v("alert('hi')\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("thus preventing the close of the "),s("code",[t._v("title")]),t._v(" attribute to inject new, arbitrary HTML. This escaping is done using native browser APIs, like "),s("code",[t._v("setAttribute")]),t._v(", so a vulnerability can only exist if the browser itself is vulnerable.")]),t._v(" "),s("h2",{attrs:{id:"potential-dangers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#potential-dangers"}},[t._v("#")]),t._v(" Potential Dangers")]),t._v(" "),s("p",[t._v("In any web application, allowing unsanitized, user-provided content to be executed as HTML, CSS, or JavaScript is potentially dangerous, so should be avoided wherever possible. There are times when some risk may be acceptable though.")]),t._v(" "),s("p",[t._v("For example, services like CodePen and JSFiddle allow user-provided content to be executed, but it's in a context where this is expected and sandboxed to some extent inside iframes. In the cases when an important feature inherently requires some level of vulnerability, it's up to your team to weigh the importance of the feature against the worst-case scenarios the vulnerability enables.")]),t._v(" "),s("h3",{attrs:{id:"injecting-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#injecting-html"}},[t._v("#")]),t._v(" Injecting HTML")]),t._v(" "),s("p",[t._v("As you learned earlier, Vue automatically escapes HTML content, preventing you from accidentally injecting executable HTML into your application. However, in cases where you know the HTML is safe, you can explicitly render HTML content:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Using a template:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-html")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedHtml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Using a render function:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  innerHTML"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userProvidedHtml\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Using a render function with JSX:")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("innerHTML")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userProvidedHtml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Note that user-provided HTML can never be considered 100% safe unless it's in a sandboxed iframe or in a part of the app where only the user who wrote that HTML can ever be exposed to it. Additionally, allowing users to write their own Vue templates brings similar dangers.")])]),t._v(" "),s("h3",{attrs:{id:"injecting-urls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#injecting-urls"}},[t._v("#")]),t._v(" Injecting URLs")]),t._v(" "),s("p",[t._v("In a URL like this:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  click me\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v('There\'s a potential security issue if the URL has not been "sanitized" to prevent JavaScript execution using '),s("code",[t._v("javascript:")]),t._v(". There are libraries such as "),s("a",{attrs:{href:"https://www.npmjs.com/package/@braintree/sanitize-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("sanitize-url"),s("OutboundLink")],1),t._v(" to help with this, but note:")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you're ever doing URL sanitization on the frontend, you already have a security issue. User-provided URLs should always be sanitized by your backend before even being saved to a database. Then the problem is avoided for "),s("em",[t._v("every")]),t._v(" client connecting to your API, including native mobile apps. Also note that even with sanitized URLs, Vue cannot help you guarantee that they lead to safe destinations.")])]),t._v(" "),s("h3",{attrs:{id:"injecting-styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#injecting-styles"}},[t._v("#")]),t._v(" Injecting Styles")]),t._v(" "),s("p",[t._v("Looking at this example:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sanitizedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedStyles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  click me\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("let's assume that "),s("code",[t._v("sanitizedUrl")]),t._v(" has been sanitized, so that it's definitely a real URL and not JavaScript. With the "),s("code",[t._v("userProvidedStyles")]),t._v(', malicious users could still provide CSS to "click jack", e.g. styling the link into a transparent box over the "Log in" button. Then if '),s("code",[t._v("https://user-controlled-website.com/")]),t._v(" is built to resemble the login page of your application, they might have just captured a user's real login information.")]),t._v(" "),s("p",[t._v("You may be able to imagine how allowing user-provided content for a "),s("code",[t._v("<style>")]),t._v(" element would create an even greater vulnerability, giving that user full control over how to style the entire page. That's why Vue prevents rendering of style tags inside templates, such as:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userProvidedStyles "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("To keep your users fully safe from click jacking, we recommend only allowing full control over CSS inside a sandboxed iframe. Alternatively, when providing user control through a style binding, we recommend using its "),s("RouterLink",{attrs:{to:"/guide/class-and-style.html#object-syntax-2"}},[t._v("object syntax")]),t._v(" and only allowing users to provide values for specific properties it's safe for them to control, like this:")],1),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sanitizedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n    color: userProvidedColor,\n    background: userProvidedBackground\n  }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  click me\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"injecting-javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#injecting-javascript"}},[t._v("#")]),t._v(" Injecting JavaScript")]),t._v(" "),s("p",[t._v("We strongly discourage ever rendering a "),s("code",[t._v("<script>")]),t._v(" element with Vue, since templates and render functions should never have side effects. However, this isn't the only way to include strings that would be evaluated as JavaScript at runtime.")]),t._v(" "),s("p",[t._v("Every HTML element has attributes with values accepting strings of JavaScript, such as "),s("code",[t._v("onclick")]),t._v(", "),s("code",[t._v("onfocus")]),t._v(", and "),s("code",[t._v("onmouseenter")]),t._v(". Binding user-provided JavaScript to any of these event attributes is a potential security risk, so should be avoided.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Note that user-provided JavaScript can never be considered 100% safe unless it's in a sandboxed iframe or in a part of the app where only the user who wrote that JavaScript can ever be exposed to it.")])]),t._v(" "),s("p",[t._v("Sometimes we receive vulnerability reports on how it's possible to do cross-site scripting (XSS) in Vue templates. In general, we do not consider such cases to be actual vulnerabilities, because there's no practical way to protect developers from the two scenarios that would allow XSS:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("The developer is explicitly asking Vue to render user-provided, unsanitized content as Vue templates. This is inherently unsafe and there's no way for Vue to know the origin.")])]),t._v(" "),s("li",[s("p",[t._v("The developer is mounting Vue to an entire HTML page which happens to contain server-rendered and user-provided content. This is fundamentally the same problem as #1, but sometimes devs may do it without realizing. This can lead to possible vulnerabilities where the attacker provides HTML which is safe as plain HTML but unsafe as a Vue template. The best practice is to never mount Vue on nodes that may contain server-rendered and user-provided content.")])])]),t._v(" "),s("h2",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[t._v("#")]),t._v(" Best Practices")]),t._v(" "),s("p",[t._v("The general rule is that if you allow unsanitized, user-provided content to be executed (as either HTML, JavaScript, or even CSS), you might be opening yourself up to attacks. This advice actually holds true whether using Vue, another framework, or even no framework.")]),t._v(" "),s("p",[t._v("Beyond the recommendations made above for "),s("a",{attrs:{href:"#potential-dangers"}},[t._v("Potential Dangers")]),t._v(", we also recommend familiarizing yourself with these resources:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://html5sec.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 Security Cheat Sheet"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OWASP's Cross Site Scripting (XSS) Prevention Cheat Sheet"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Then use what you learn to also review the source code of your dependencies for potentially dangerous patterns, if any of them include 3rd-party components or otherwise influence what's rendered to the DOM.")]),t._v(" "),s("h2",{attrs:{id:"backend-coordination"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-coordination"}},[t._v("#")]),t._v(" Backend Coordination")]),t._v(" "),s("p",[t._v("HTTP security vulnerabilities, such as cross-site request forgery (CSRF/XSRF) and cross-site script inclusion (XSSI), are primarily addressed on the backend, so aren't a concern of Vue's. However, it's still a good idea to communicate with your backend team to learn how to best interact with their API, e.g. by submitting CSRF tokens with form submissions.")]),t._v(" "),s("h2",{attrs:{id:"server-side-rendering-ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-side-rendering-ssr"}},[t._v("#")]),t._v(" Server-Side Rendering (SSR)")]),t._v(" "),s("p",[t._v("There are some additional security concerns when using SSR, so make sure to follow the best practices outlined throughout "),s("RouterLink",{attrs:{to:"/guide/ssr/introduction.html"}},[t._v("our SSR documentation")]),t._v(' to avoid vulnerabilities.\n{"mode":"full","isActive":false}')],1)])}),[],!1,null,null,null);e.default=n.exports}}]);