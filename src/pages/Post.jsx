
import { useState } from 'react'
import './Post.css'

function Post() {
  const [postType, setPostType] = useState('question')

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const title = form.elements.title.value.trim()
    const tags = form.elements.tags.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '')

    if (title === '') {
      alert('Please enter a title.')
      return
    }

    if (tags.length > 3) {
      alert('Maximum 3 tags allowed.')
      return
    }

    if (postType === 'question') {
      if (form.elements.description.value.trim() === '') {
        alert('Please describe your problem.')
        return
      }
      alert('Your question has been sent successfully!')
    } else {
      if (form.elements.abstract.value.trim() === '' || form.elements.articleText.value.trim() === '') {
        alert('Please complete all article fields.')
        return
      }
      alert('Your article has been sent successfully!')
    }
  }

  return (
    <main className="post-page">
      <h1 className="post-main-heading">New Post</h1>

      <div className="post-type-row">
        <span>Select Post Type:</span>
        <label><input type="radio" name="postType" checked={postType === 'question'} onChange={() => setPostType('question')} /> Question</label>
        <label><input type="radio" name="postType" checked={postType === 'article'} onChange={() => setPostType('article')} /> Article</label>
      </div>

      <h2 className="post-section-heading">What do you want to ask or share</h2>

      <p className="post-instructions">
        This section is designed based on the type of the post. It could be developed by conditional rendering.
        <span className="post-highlight">{postType === 'question' ? ' For a question, the following section would be appeared.' : ' For an article, the following section would be appeared.'}</span>
      </p>

      <form className="post-form" onSubmit={handleSubmit}>
        <div className="post-field post-title">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" required placeholder={postType === 'question' ? 'Start your question with how, what, why, etc.' : 'Enter a descriptive title'} />
        </div>

        {postType === 'question' ? (
          <div className="post-field post-question-description">
            <label htmlFor="description">Describe your problem</label>
            <textarea id="description" name="description" required />
          </div>
        ) : (
          <>
            <div className="post-field post-abstract">
              <label htmlFor="abstract">Abstract</label>
              <textarea id="abstract" name="abstract" required placeholder="Enter a 1-paragraph abstract" />
            </div>

            <div className="post-field post-article-text">
              <label htmlFor="articleText">Article Text</label>
              <textarea id="articleText" name="articleText" required placeholder="Enter your article text" />
            </div>
          </>
        )}

        <div className="post-field post-tags">
          <label htmlFor="tags">Tags</label>
          <input id="tags" name="tags" placeholder={`Add up to 3 tags for your ${postType}, e.g., Java`} />
        </div>

        <button className="post-submit" type="submit">Post</button>
      </form>
    </main>
  )
}

export default Post
