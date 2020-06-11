import view from '../utils/view.js'
import baseURL from '../utils/baseURL.js'
import Story from '../components/Story.js'
import Comment from '../components/Comment.js'

export default async function Item() {
  let story = null
  let hasComments = false
  let hasError = false

  try {
    story = await getStory()
    hasComments = story.comments.length > 0
  } catch (error) {
    hasError = true
    console.error(error)
  }

  if (hasError) {
    view.innerHTML = `<div class="error">An error occurred while fetching this story</div>`
  }

  view.innerHTML = `
    <div>
        ${Story(story)}
    </div>
    <hr/>
    ${
      hasComments
        ? story.comments.map(comment => Comment(comment)).join('')
        : 'No comments'
    }
  `
}

const getStory = async () => {
  const hash = window.location.hash
  const itemId = hash.slice(10)

  const response = await fetch(`${baseURL}/item/${itemId}`)
  const data = await response.json()
  return data
}
