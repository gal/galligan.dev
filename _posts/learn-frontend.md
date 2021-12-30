---
title: You can't learn modern frontend in college. Here's how you can.
description: Why learning modern frontend development in college is impossible, and how to actually learn it.
cover_image: /static/learn-frontend.jpg
cover_image_blur: /static/learn-frontend.blur.jpg
tags: web dev,react,vuejs,angular,javascript,typescript,html,css,js,ts,frontend,webdev,web-dev,development,learn,computerscience,college
author: Thomas Daniel Galligan
published: "2021-12-06"
modified: "2021-12-15"
---

- [Steps to learning modern frontend](#steps-to-learning-modern-frontend)
  - [Learn HTML](#learn-html)
  - [Learn the basics of CSS](#learn-the-basics-of-css)
  - [Learn JavaScript](#learn-javascript)
  - [Make a website using what you've learned with HTML, CSS and maybe a little bit of JavaScript](#make-a-website-using-what-youve-learned-with-html-css-and-maybe-a-little-bit-of-javascript)
  - [Learn a web framework like React](#learn-a-web-framework-like-react)
  - [Learn some backend technologies](#learn-some-backend-technologies)
  - [Create another website :)](#create-another-website-)

As modern frontend frameworks, libraries and methodology advances, modules and teaching methods adopted in colleges become ever more archaic. As many educators require a lot of time to not only learn the ins and outs of what they're teaching, they must also create and optimize a course that students can learn from in a short timespan, with often less experience in the field. In so doing, the educator is almost constantly behind on what is considered "the best" modern frameworks and methods, while the frontend ecosystem changes so much from year to year.

For example, [PHP](https://php.org) was once seen as revolutionary, now it causes almost any software engineer with frontend experience to physically cringe at hearing the acronym. [Angular](https://angularjs.org) was revolutionary, but got completely overtaken by [React](https://reactjs.org) before long. React is still the most popular frontend framework, but it's still a long way from being perfect, and as such more frameworks like [VueJS](https://vuejs.org) and [Svelte](https://svelte.dev) are now being adopted far and wide. Meanwhile, many Computer Science/Software Development college courses barely teach JavaScript at all, when it is instrumental for an entire industry of development, and is the most popular programming language in the world ([Stack Overflow Survey 2021](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages)). This is a huge problem for many educators, who are often understandably not up-to-date on the many different frontend frameworks and libraries that are out there. To make matters worse, [TypeScript](https://typescriptlang.org), a programming language built on top of JavaScript that adds syntax for typing which adds more complexity for learning modern web development.

You may be asking at this point "Why does everything keep changing so much?". In my opinion, the answer is simple: The frontend of a website for a company is the first impression a customer often gets of a company. As time goes on, companies are looking to make more unique and attention-grabbing frontends, and can afford to do so, as (so long as the backend is properly implemented...) changing the frontend can't shouldn't expose backend vulnerabilities or cause loss of data. As such, the best frontend frameworks and libraries are constantly changing to meet the demand for more complex websites by companies pushing for newer developments.

So now that I've bashed the concept of learning modern frontend in college, I'm going to explain how you're going to actually learn it, and be ahead of the flock...

# Steps to learning modern frontend

## Learn HTML
Learn the basics of HTML
HTML is a must-have for anyone doing any sort of web development. It is what defines the content displayed to the viewer, like text and images. I recommend doing the [W3Schools HTML tutorial](https://www.w3schools.com/html/default.asp) to get a feel for the basics of HTML. Here's a quick example of some HTML code.

```html
<body>
  <p>Hello World</p>
</body>
```

## Learn the basics of CSS
CSS is what makes a website not look like its from the '80s. It entails all the look and style of HTML elements. If you did the HTML course mentioned in part 1, you'll have at least experienced a little CSS. After this, I would look at [CSS-Tricks Guides](https://css-tricks.com/guides/) to master some of the vitally important CSS skills, like centering a div :). Here's some CSS code to change the color and font of text in a paragraph.

```css
p {
  color: red;
  font-family: 'Fira Code';
}
```

## Learn JavaScript
JavaScript is the real language of the modern web. It is immeasurably important to understand the scripting language used in almost any website you've ever used. JavaScript is often used to perform calculations and mathematics, but can also add or change HTML elements programmatically (important for [later](#learn-a-web-framework-like-react)). I would start learning JavaScript fundamentals on [LearnJS.org](https://www.learn-js.org/). It includes some of the basic syntax and some of the APIs to access the web browser and Document Object Model (DOM). Here's an example of how to change the DOM to include some text generated in JavaScript.

```js
const message = "Hello World";
document.getElementById("messagegoeshere").innerHTML = message;
```

## Make a website using what you've learned with HTML, CSS and maybe a little bit of JavaScript
It doesn't have to be anything spectacular, just something to show for your work. A simple website showing your knowledge of how to structure a HTML page, with some clean styling to show how you use CSS to change the look and feel of your website without resorting to creating a messy DOM. Maybe include something that shows off your JavaScript experience, like a simple text-based game or calculator.

## Learn a web framework like React
Using a web framework like react is a very transferrable skill that can be applied to other frameworks down the road. The purpose of these web frameworks is to allow someone to write programmatic HTML in JavaScript/TypeScript. This allows for far more control over the DOM and control web views in code instead of markup (HTML). As react is currently the most popular, and most featureful framework, it's a must-have for anyone who wants to learn the modern web. I would recommend [React-Tutorials](https://react-tutorials.com/) to get a feel for the basics of react, and after messing with the basics of a component, try out some videos on youtube from the likes of [Ben Awad](https://www.youtube.com/c/BenAwad97) and [Traversy Media](https://www.youtube.com/c/TraversyMedia) for tips and advice on how to continue learning with react. Here, we can see one of the advantages of using react, allowing us to conditionally render a component based on the screen's size, for example.

```js
const App = (): React.FC => {
  return (
    <div>
      <p>{(window.innerWidth > 700) ? "Hello desktop" : "Hello mobile"}</p>
    </div>
  )
}
```

## Learn some backend technologies
As you have already done some JavaScript, it only makes sense to use NodeJS to create a backend. [ExpressJS](https://expressjs.com/) is a very popular backend framework, and is a very competent framework for creating backend APIs. Databases like MongoDB are very popular for use with JavaScript APIs. Below is a very basic example of how to use ExpressJS to respond to an HTTP request.

```js
app = express()

app.get("/", (req, res) => {
  res.send("😎")
})

app.listen("3000", () => {
  console.log("Server is listening on port 3000")
})
```

## Create another website :)
Now that you've learned the basics of the modern web, it's time to create your own professional website, using a web framework. You can create a full-stack web application including a front and backend, or just make an enticing portfolio website.
