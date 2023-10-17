import '../css/global-styles.css'
import '../css/style.css'
import '../css/font.css'

import TodoApp from '../elements/todoApp'

function MainPage() {
    return (
    <div className="main-page-wrapper">
        <section className="main-page">
            <div className="main-page-background">
            </div>
            <TodoApp />
        </section>
    </div>
    )
}

export default MainPage