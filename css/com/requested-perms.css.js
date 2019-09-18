import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import buttonsCSS from '/vendor/beaker-app-stdlib/css/buttons2.css.js'
import formCSS from '/css/form.css.js'

const cssStr = css`
${formCSS}
${buttonsCSS}

p {
  margin: 5px 0;
}

a {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}

.field-group {
  display: block;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.field-group > div {
  margin-bottom: 5px;
}
`
export default cssStr