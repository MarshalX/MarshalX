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

const CodeFragment = (lang, code) => {
  return `<code class="language-${lang}">${Prism.highlight(
    code,
    Prism.languages[lang]
  )}</code>`
}

const htmlSerializer = (type, element, content) => {
  switch (type) {
    case Elements.label: {
      if (element.data.label === "quote") {
        return `<blockquote><p>${content}</p></blockquote>`
      }
      if (element.data.label === "text") {
        return `<code class="language-text">${content}</code>`
      }

      return `${CodeFragment(element.data.label, content)}`
    }
    case Elements.preformatted: {
      return `<pre class="language-${element.label}">${CodeFragment(
        element.label,
        element.text
      )}</pre>`
    }
    default: {
      return null
    }
  }
}

module.exports = htmlSerializer
