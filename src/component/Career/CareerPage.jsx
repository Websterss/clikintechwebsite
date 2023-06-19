import { blocks } from "./CareerBlocks"
import './CareerPage.css'

function CareerPage(){
    return(
        <section className="blocks">
            <div className="blocks_wrapper">
                {
                    blocks.map(({id, icon, title, info})=>{
                        return(
                            <div className="blocks_block" key={id}>
                               <span>{icon}</span>
                               <h4>{title}</h4>
                               <small>{info}</small>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    )
}

export default CareerPage