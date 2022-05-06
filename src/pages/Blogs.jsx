import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
function Blogs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className='blog-page'>
        <div className="blog-page-background">
            <h2>Bloqlarımız</h2>
        </div>
        <div className="container">
            
            <div className="blog-page-content">
                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/react_project/blogs/detailed'>
                       <img className='w-100' src="https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/react_project/blogs/detailed'><h3>Çiyələkli Keks</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/react_project/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/react_project/blogs/detailed'>
                       <img className='w-100' src="https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/react_project/blogs/detailed'><h3>COFFEE BARISTA</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/react_project/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/react_project/blogs/detailed'>
                       <img className='w-100' src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/react_project/blogs/detailed'><h3>Səhər Yeməyi Vaxtı</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/react_project/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/react_project/blogs/detailed'>
                       <img className='w-100' src="https://images.unsplash.com/photo-1620921575116-fb8902865f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/react_project/blogs/detailed'><h3>YAĞ TOSTU</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/react_project/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/react_project/blogs/detailed'>
                       <img className='w-100' src="https://images.unsplash.com/photo-1547414368-ac947d00b91d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/react_project/blogs/detailed'><h3>Caramel Keks</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/react_project/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-img">
                       <Link to='/react_project/blogs/detailed'>
                       <img className='w-100' src="https://images.unsplash.com/photo-1611614010348-7df489604fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="" />
                       </Link>
                    </div>
                    <div className="blog-card-text">
                        <h5>5 Yanvar,2017</h5>
                        <Link to='/react_project/blogs/detailed'><h3>ŞOKOLADLI MUFFINLƏR</h3></Link>
                        <p>Veb sayt dizaynına qərar vermək çətindir. Onun parlaq və ya incə olmasını istəyirsiniz? Artsy? Klassik? Biz diqqət tələb edən əsəbi dizaynlara səs veririk.</p>
                        <Link to='/react_project/blogs/detailed'>Ətraflı</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Blogs