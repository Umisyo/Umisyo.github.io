const asciiArt =
  '                                                                                          ■■       ■\n' +
  ' ■■■■                                  ■■■  ■■■                                           ■■      ■■\n' +
  '■   ■                    ■              ■                                                  ■        \n' +
  '■                        ■              ■   ■                                              ■        \n' +
  '■■      ■■■■   ■■  ■■   ■■■   ■■■       ■  ■     ■■  ■■    ■■■  ■■  ■■   ■■ ■■■    ■■■■    ■ ■■■  ■■\n' +
  ' ■■    ■   ■■  ■■   ■   ■■   ■   ■      ■ ■■     ■■   ■   ■  ■  ■■   ■   ■■   ■   ■   ■■   ■      ■■\n' +
  '  ■■■  ■    ■  ■■   ■   ■■       ■      ■■ ■     ■■   ■   ■■    ■■   ■    ■   ■   ■    ■   ■ ■     ■\n' +
  '    ■■ ■    ■  ■■   ■   ■■    ■■ ■      ■   ■    ■■   ■    ■■■  ■■   ■    ■   ■   ■    ■   ■■■     ■\n' +
  '     ■ ■    ■  ■■   ■   ■■   ■   ■      ■   ■    ■■   ■      ■  ■■   ■    ■   ■   ■    ■   ■ ■■    ■\n' +
  '■   ■  ■    ■   ■  ■■   ■■   ■  ■■      ■    ■    ■  ■■   ■  ■■  ■  ■■    ■   ■   ■    ■   ■  ■    ■\n' +
  '■■■■■   ■■■■    ■■■ ■■   ■■  ■■■ ■■    ■■■  ■■■   ■■■ ■■  ■■■■   ■■■ ■■  ■■  ■■■   ■■■■   ■■   ■  ■■\n'

module.exports = html => {
  html = html.replace(
    /<!doctype html>/,
    `<!doctype html>\n<!--\n${asciiArt}-->`
  )

  return html
}
