import React from 'react'
import style from "./Title.module.css";

const Title = () => {
    return (
        <div className={style.title}>
            <div className={style.title_option}>
                <h5>Featured title</h5>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
            <div className={style.title_option}>
                <h5>Featured title</h5>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
            <div className={style.title_option}>
                <h5>Featured title</h5>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
        </div>
    )
}

export default Title
