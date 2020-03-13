import React from "react"

export const onRenderBody = (
  { setPostBodyComponents, setBodyAttributes },
  pluginOptions
) => {
  setPostBodyComponents([
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossOrigin="anonymous"
    ></script>,
    <script
      src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
      integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
      crossOrigin="anonymous"
    ></script>,
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/popper.min.js"
      integrity="sha256-O17BxFKtTt1tzzlkcYwgONw4K59H+r1iI8mSQXvSf5k="
      crossOrigin="anonymous"
    ></script>,
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossOrigin="anonymous"
    ></script>,
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
      integrity="sha256-P93G0oq6PBPWTP1IR8Mz/0jHHUpaWL0aBJTKauisG7Q="
      crossOrigin="anonymous"
    ></script>,
  ])
  setBodyAttributes({ id: "page-top" })
}
