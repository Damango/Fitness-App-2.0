import React from 'react'
import "./TemplateCard.css"

const TempalteCard = (props) => {
    return ( <div className="template-card-container">
        <div className="template-card-category-header"></div>
        <div className="template-body">
            <div className="template-title">{props.data.templateName}</div>
            <div className="template-set-count center-y">{props.data.exercises.length} Exercises</div>
       

        <div className="template-change-container"></div>
        </div>
        
    </div> );
}
 
export default TempalteCard;