const css = `* {
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
html {
	-webkit-text-size-adjust: 100%;
}
body {
	font-family: -apple-system-font, "Helvetica Neue", Helvetica, sans-serif;
	font-size: 14px;
	line-height: 1;
}
select,
input,
button,
textarea {
	appearance: none;
	padding: 0;
	margin: 0;
	font-size: 14px;
	font-family: -apple-system-font, "Helvetica Neue", Helvetica, sans-serif;
	border: none;
	background-color: transparent;
	outline: none;
	box-shadow: none;
	overflow: hidden;
}
li {
	list-style: none;
}
img {
	vertical-align: middle;
	border: 0;
}
a {
	text-decoration: none;
	color: inherit;
}
a:hover {
	text-decoration: none !important;
}
:after,
:before {
	box-sizing: border-box;
}
::-webkit-input-placeholder {
	color:#999;
}
/* 此处就是去掉默认的小× */
input[type=search]::-webkit-search-cancel-button{
    appearance: none;
}
input:disabled,
input[disabled] {
    -webkit-text-fill-color: #999;
    opacity: 1;
    color: #999 !important;
}

a,
img,
button,
input,
textarea,
div{
	-webkit-tap-highlight-color: rgba(255,255,255, .6);
}`

module.exports = css;