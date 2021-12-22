import React from 'react'

const LandingContent = ({ images, texts, currentIndex }) => {
    return (
        <div>
            <div className='slide-image'>
                {images.map((image, index) => {
                    return (
                    <img 
                        key={index} className={currentIndex === index ? 'image active': 'image'}
                        src={process.env.PUBLIC_URL + `/images/${image}`} 
                        alt="Background Image" 
                    />);
                })}
            </div>
            
            {texts.map((text, index) => {
                return (<div key={index} className={currentIndex === index ? 'slide-text active': 'slide-text'}>
                    <h1>{text.title}</h1>
                    <h2>{text.subtitle}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eius excepturi 
                        cum architecto id iure nihil accusamus culpa temporibus? Ducimus qui laudantium 
                        provident incidunt eaque mollitia enim ullam quo laborum.
                    </p>
                </div>)
            })}
        </div>
    )
}

export default LandingContent
