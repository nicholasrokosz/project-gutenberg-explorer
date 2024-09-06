'use server'

export const fetchBook = async (bookID: string) => {
  const contentURL = `https://www.gutenberg.org/files/${bookID}/${bookID}-0.txt`
  // const metadataURL = `https://www.gutenberg.org/ebooks/${bookID}`
  const metadataURL = `https://gutendex.com/books/${bookID}`

  const contentResponse = await fetch(contentURL)
  const content = await contentResponse.text()

  const metadataResponse = await fetch(metadataURL)
  const metadata = await metadataResponse.json()

  // console.log(content)
  // console.log(metadata)

  return metadata
}
