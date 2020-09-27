import React from 'react'
import { ImSphere} from 'react-icons/im'

function Features() {
    return (
        <div className='features'>
            <div className="feature">
                <div className="feature__icon">
                    <ImSphere/>
                </div>
                <h4 className="header-4">World's best homes</h4>
                <p className="feature__text">Quisquam distinctio id rerum neque molestiae, necessitatibus a? Architecto nesciunt saepe ratione rem, laboriosam laborum perspiciatis?</p>
            </div>
            <div className="feature">feature 2</div>
            <div className="feature">feature 3</div>
            <div className="feature">feature 4</div>
            <div className="feature">feature 5</div>
            <div className="feature">feature 6</div>
        </div>
    )
}

export default Features
