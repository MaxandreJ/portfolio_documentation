# Introduction to selectors

**Document in construction**

This document introduces the notion of a *selector*, with a focus on its implementation in the language of Cascading Style Sheets (CSS). This document does not provide a comprehensive introduction to CSS (for one, please refer to [w3schools][css-tutorial], for example).

Selectors are found in every CSS document. Therefore, every student of CSS should learn about them. I wrote this document for people who are already familiar with the Hypertext Markup Language (HTML), but are only beginning to learn CSS.

A selector is a sequence of characters that define a search pattern. The selector can be used to select elements of a document that match the search pattern. Selectors of various level of complexity exist in CSS. This document only covers some simple CSS selectors:

* the universal selector,
* type selectors,
* attribute selectors,
* class selectors,
* ID selectors.

I will introduce the previous selectors by considering how they may be used to improve the layout of a sample HTML page. Suppose that a child called Suzie wrote a page of her personal diary using HTML. In the `#!HTML body` of the page, she wrote:
``` HTML
<h1>Suzie's personal diary</h1>
<h2>Tuesday, 12th January 2021</h2>
<p class="entry introductory">
    <span title="A mean boy.">Tim</span> was mean to me today.
</p>
<p class="entry body">
    Today at school, I asked Tim to lend me his eraser because I had forgotten mine at home. He replied that I am the one who should be erased and started laughing. Tim is so mean and <span id="angry">I hate him</span>!
</p>
```

Now, her diary look like this:
![Suzie's diary with a default layout.][default]{: class="screenshots"}

Suzie is disappointed with the bland look of the page. She decides to use CSS to design the page. She creates a blank CSS file called `style.css` in the directory of the HTML page, and inserts the following code in the `#!HTML head` of the page:
```HTML
<link rel = "stylesheet"
  type = "text/css"
  href = "style.css" />
```
This code enables the use of the CSS file `style.css` to style the HTML page. Next, we will review how she can add the simple CSS selectors to `style.css` to design the page.

[default]: ../resources/images/tutorials/selectors/default.png

## The universal selector

The universal selector `#!CSS *` selects all elements. Like all selectors, the universal selector is found before a code block that defines a style.

Suzie would like all of her text to appear handwritten. She uses the universal selector to select all the text that she wrote. She inserts the following code into `style.css`:
```CSS hl_lines="1"
* {
    font-family: "Bradley Hand";
}
```
This code redesigns Suzie's page into:
![Suzie's diary after having used the universal selector.][universal_selector]{: class="screenshots"}

Suzie likes the improvements, but thinks that she would have still done a much better job if she had designed her diary on paper. Next, we consider how using type selectors can help improve the look of her diary further.

[universal_selector]: ../resources/images/tutorials/selectors/universal_selector.png

## Type selectors

Type selectors select all HTML elements of a given type. The type selector is the type to be selected. Common types include `#!HTML p`, `#!HTML h1`, `#!HTML h2`, `#!HTML div` and `#!HTML span`.

Suzie would like the top heading to be in small caps and the date to be underlined. She adds the following code into the CSS file:
```CSS hl_lines="1 5"
h1 {
    font-variant: small-caps;
}

h2 {
    text-decoration: underline;
}
```
Suzie's personal diary now appears as:
![Suzie's diary after having used the universal and type selectors.][type_selectors]{: class="screenshots"}

[type_selectors]: ../resources/images/tutorials/selectors/type_selectors.png



*To be continued.*

[css-tutorial]: https://www.w3schools.com/css/default.asp