// Write your code here.
import './index.css'

const FaqItem = props => {
  const {details, faqAction} = props
  const {id, questionText, answerText, isExpanded} = details

  const plusminusaction = () => {
    faqAction(id)
  }
  const imgUrl = isExpanded
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isExpanded ? 'minus' : 'plus'
  return (
    <li>
      <div>
        <h1>{questionText}</h1>
        <button type="button" onClick={plusminusaction}>
          <img src={imgUrl} alt={altText} />
        </button>
        <p>{isExpanded && answerText}</p>
      </div>
    </li>
  )
}

export default FaqItem
