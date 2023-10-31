
import React from 'react'

function Footer() {
  return (
    <div className="mt-5 float-end w-100">
    <hr />
    <div className="text-secondary p-5">
      <p className='text text-center'>
      이곳은 가족 블로그형식으로 어떤것을 넣으면 좋을까하다 만들어본 블로그입니다. 재밌게 봐주셨으면 감사하겠습니다.
      </p>
    </div>
    {/* 아이콘 */}
    <div className="mb-4">
    <i className="bi bi-window-split me-3"></i>
    <i className="bi bi-cloud-slash me-3"></i>
    <i className="bi bi-chat-square-heart-fill me-3"></i>
    <i className="bi bi-cart-check-fill me-3"></i>
    <i className="bi bi-emoji-kiss-fill me-3"></i>
    </div>
  </div>
  )
}

export default Footer