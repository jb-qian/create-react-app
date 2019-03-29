const css = `@charset "utf-8";
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
html,
body,
ul,
li,
p,
span,
h1,
h2,
h3,
h4,
button {
	margin: 0;
	padding: 0;
}
h1,
h2,
h3,
h4 {
	font-family: inherit;
	font-weight: 500;
	line-height: 1.1;
	color: inherit;
}
html{
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
	-ms-overflow-style: scrollbar;
}
body {
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
	font-size: 14px;
	line-height: 1;
	color: #333333;
	background-color: #f5f5f5;
}
html,
body {
	-webkit-tap-highlight-color: transparent;
}
li {
	list-style: none;
}
img {
	vertical-align: middle;
	border: 0;
}
input,
button,
select,
textarea {
	padding: 0;
	margin: 0;
	font-size: 14px;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
	border: none;
	background-color: transparent;
	outline: none;
	-webkit-box-shadow: none;
	box-shadow: none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
a {
	text-decoration: none;
	color: inherit;
}
a:hover {
	text-decoration: none;
	color: inherit;
}
:after,
:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
/*表单操作*/
input[disabled],
select[disabled],
input.disabled,
select.disabled,
input[disabled].disabled,
select[disabled].disabled {
	background-color: #eee;
	cursor: no-drop;
}
input,
select {
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
}
/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand { display: none; }
textarea{
	vertical-align: middle;
}
::-webkit-input-placeholder {
	color:#999;
}`

module.exports = css;