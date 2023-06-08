# HTML Variables

This is a simple library that adds the possibility to declare variables in HTML.

This library was made just for fun because why not :)

## Try it yourself

If you want to see a working demo, you can check the file `example.html`.

Anyway, here is an overview of the library.

### Installation

First of all, you need to include the library.

To do so, just download the file `html-variables.js` and include it in your HTML like this:

```html
<script src="./html-variables.js"></script>
```

make sure to adjust the relative path according to your directory structure.

### Usage

Declaring a variable in HTML is very straightforward:

```html
<js-var name="strVar" value="Your string"></js-var>
```

The `name` attribute allows you to specify the name of the variable, while the `value` attribute lets you assign it a value.

For instance, the snippet creates a variable called `strVar` with a value of `"Your string"`.

By default the type of the variables is `string`. You can specify a type with the `type` attribute.

As for now, the supported types are:
- `string` (default)
- `number`
- `boolean`

```html
<js-var name="num" value="42" type="number"></js-var>
```

In this snippet, a variable called `num` is created with a value of `42`. By default the type would be `string`, however in this case it's set to `number`.

You can access the variables declared in HTML as you would normally with global variables in javascript.

```javascript
console.log(num);  // outputs 42
```
