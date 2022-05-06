import React ,{useEffect} from 'react'
import Bloghead from '../images/detailblog1.jpg'


function Detailedblog() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='detailedblog-page'>
            <div className="container">
                <h2>Blog</h2>
                <div className="detailedblog-content">
                    <img className='w-100 straw' src={Bloghead} alt="" />
                    <h4>Yanvar 4, 2022</h4>

                    <p>Barista kimi işləmiş bizlər bu ifadəni çox yaxşı bilirlər. Bu kimi qısa ola bilər: “Grande Latte, Extra Hot”; bir az daha dəqiq olaraq: “Südümə əlavə isti verə bilərəmmi?”; və ya hətta "Gedəcəyim yerə uzun bir avtomobilim var, ona görə də südün çox isti olması lazımdır ki, davam etsin..." kimi təfərrüatlı izahat.
                    </p>

                    <h3>
                        "Pul xoşbəxtliyi satın ala bilməsə də, o, şübhəsiz ki, öz bədbəxtliyinizi seçməyə imkan verir"
                    </h3>
                    <h4 className='marx'>Groucho Marx</h4>

                    <p>Barista kimi işləmiş bizlər bu ifadəni çox yaxşı bilirlər. Bu kimi qısa ola bilər: “Grande Latte, Extra Hot”; bir az daha dəqiq olaraq: “Südümə əlavə isti verə bilərəmmi?”; və ya hətta "Gedəcəyim yerə uzun bir avtomobilim var, ona görə də südün çox isti olması lazımdır ki, davam etsin..." kimi təfərrüatlı izahat.
                    </p>

                    <div className="detailedblog-section">
                        <div className="detailedblog-section-img">
                            <img src="https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80" alt="" className='w-100' />
                        </div>

                        <div className="detailedblog-section-text">
                            <p>Barista kimi işləmiş bizlər bu ifadəni çox yaxşı bilirlər. Bu kimi qısa ola bilər Barista kimi işləmiş bizlər bu ifadəni çox yaxşı bilirlər. Bu kimi qısa ola bilər : “Grande Latte, Extra Hot”; bir az daha dəqiq olaraq: “Südümə əlavə isti verə bilərəmmi?”; və ya hətta "Gedəcəyim yerə uzun bir avtomobilim var, ona görə də südün çox isti olması lazımdır ki, davam etsin..." kimi təfərrüatlı izahat.
                            </p>

                            <p>Barista kimi işləmiş bizlər bu ifadəni çox yaxşı bilirlər. Bu kimi qısa ola bilər Barista kimi işləmiş bizlər bu ifadəni çox yaxşı bilirlər. Bu kimi qısa ola bilər Barista kimi işləmiş bizlər bu ifadəni çox yaxşı bilirlər. Bu kimi qısa ola bilər : “Grande Latte, Extra Hot”; bir az daha dəqiq olaraq: “Südümə əlavə isti verə bilərəmmi?”; və ya hətta "Gedəcəyim yerə uzun bir avtomobilim var, ona görə də südün çox isti olması lazımdır ki, davam etsin..." kimi təfərrüatlı izahat.
                            </p>
                        </div>
                    </div>

                    <p>Barista kimi işləmiş bizlər bu ifadəni çox yaxşı bilirlər. Bu kimi qısa ola bilər: “Grande Latte, Extra Hot”; bir az daha dəqiq olaraq: “Südümə əlavə isti verə bilərəmmi?”; və ya hətta "Gedəcəyim yerə uzun bir avtomobilim var, ona görə də südün çox isti olması lazımdır ki, davam etsin..." kimi təfərrüatlı izahat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detailedblog