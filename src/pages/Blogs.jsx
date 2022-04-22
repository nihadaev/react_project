import React from 'react'
import {Link} from 'react-router-dom'
function Blogs() {
  return (
    <div className='blog-page'>
        <div className="container">
            <div className="blog-page-content">
                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/blogs/detailed'>
                       <img className='w-100' src="https://baker.qodeinteractive.com/wp-content/uploads/2017/01/blog-img-1.jpg" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/blogs/detailed'><h3>Çiyələkli Keks</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/blogs/detailed'>
                       <img className='w-100' src="https://baker.qodeinteractive.com/wp-content/uploads/2017/01/blog-img-3.jpg" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/blogs/detailed'><h3>COFFEE BARISTA</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/blogs/detailed'>
                       <img className='w-100' src="https://baker.qodeinteractive.com/wp-content/uploads/2017/01/blog-img-2-1.jpg" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/blogs/detailed'><h3>Səhər Yeməyi Vaxtı</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/blogs/detailed'>
                       <img className='w-100' src="https://baker.qodeinteractive.com/wp-content/uploads/2017/01/blog-img-6.jpg" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/blogs/detailed'><h3>YAĞ TOSTU</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/blogs/detailed'>
                       <img className='w-100' src="https://baker.qodeinteractive.com/wp-content/uploads/2016/12/blog-img-7-2.jpg" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/blogs/detailed'><h3>Caramel Keks</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/blogs/detailed'>
                       <img className='w-100' src="https://baker.qodeinteractive.com/wp-content/uploads/2016/12/blog-img-9-2.jpg" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/blogs/detailed'><h3>ŞOKOLADLI MUFFINLƏR</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Blogs