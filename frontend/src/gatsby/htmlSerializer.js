const { RichText } = require("prismic-dom")

const Prism = require("prismjs")
const loadLanguages = require("prismjs/components/index")

let languages = new Set()
const path = require.resolve("prismjs/components").replace(".js", "")
require("fs")
  .readdirSync(path)
  .forEach(file => {
    if (
      !file.includes("index") &&
      !file.includes("core") &&
      !file.includes(".min")
    ) {
      languages.add(file.replace(".js", "").replace("prism-", ""))
    }
  })

loadLanguages(Array.from(languages))

const { Elements } = RichText

const CodeFragment = element => {
  return `<code class="language-${element.label}">${Prism.highlight(
    element.text,
    Prism.languages[element.label]
  )}</code>`
}

const htmlSerializer = (type, element, content) => {
  switch (type) {
    case Elements.label: {
      if (element.data.label === "quote") {
        return `<blockquote><p>${content}</p></blockquote>`
      }

      return `${CodeFragment(element)}`
    }
    case Elements.preformatted: {
      return `<pre class="language-${element.label}">${CodeFragment(
        element
      )}</pre>`
    }
    default: {
      return null
    }
  }
}

module.exports = htmlSerializer
