

class GridEidt extends Component{

    render(){

        return (

            <div className="dashboard-edit-menu-container">
                <div role="button" aria-label="Edit Dashboard" title="Edit Dashboard" className="button menu-toggle-button propagate-keydown-event" tabindex="0">
                    <div className="button-icon closed-icon bowtie-edit"></div>
                    <div className="button-icon open-icon bowtie-check"></div>
                </div>
                <div className="edit-menu">
                    <div role="button" aria-label="Add Widget" title="Add Widget" className="button add-widget-button propagate-keydown-event" tabindex="0">
                        <div className="button-icon bowtie-math-plus"></div>
                    </div>
                </div>
            </div>





        )



    }
}