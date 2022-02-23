const { transform } = require('@parcel/css')
const { dirname } = require('path')
const { readFileSync } = require('fs')
const { Buffer } = require('buffer')

const arcoCssPath = require.resolve('@arco-design/web-react/dist/css/arco.css')

const run = async () => {
  // --------- error info ---------

  // const result = transform({
  //     ^

  // SyntaxError: Unexpected token Ident("-clear-icon")

  const result = transform({
    filename: dirname(arcoCssPath),
    code: Buffer.from(readFileSync(arcoCssPath, 'utf-8')),
    minify: true,
  })
}

run()
