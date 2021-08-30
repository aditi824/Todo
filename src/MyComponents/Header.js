import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        <div>
            <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">{props.title}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  {props.Disabled?<li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>:"  "}
</ul>
        </div>
    )
}

// Header.defaultProps={
//   title:"Your title here",
//   Disabled:true
// }

Header.propTypes={
  title:PropTypes.string,
  Disabled:PropTypes.bool.isRequired
}