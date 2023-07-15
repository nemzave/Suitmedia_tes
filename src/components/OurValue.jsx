import '../assets/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faLightbulb, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

function OurValue () {
  return(
  <div className="container overflow-hidden text-center">
    <div className="row gx-5">
      <div className="col">
      <div className="p-3 arrow_box" style={{backgroundColor: "#EA7C6F", color:"white", borderLeftColor:"#E15244"}}>
      <FontAwesomeIcon icon={faLightbulb} flip="horizontal" style={{color: "#ffffff",}} size="xl" /><br/>
      <h5 className="mb-3 mt-3">INNOVATIVE</h5>
        <p className="mb-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante.
        Mauris eleifend, quam a vulputate dictum?</p>
       </div>
      </div>
      <div className="col">
        <div className="p-3 arrow_box1" style={{backgroundColor: "#6A996F", color:"white", borderLeftColor:"#567B59"}}>
        <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#ffffff",}} size="xl" /><br/>
        <h5 className="mb-3 mt-3">LOYALTY</h5>
        <p className="mb-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante.
        Mauris eleifend, quam a vulputate dictum</p>
       </div>
      </div>
      <div className="col" >
        <div className="p-3 arrow_box2" style={{backgroundColor:"#5696C2", color:"white", borderColor:"#5696C2" }}>
        <FontAwesomeIcon icon={faScaleBalanced} style={{color: "#ffffff",}} size="xl" /><br/>
        <h5 className="mb-3 mt-3">RESPECT</h5>
        <p className="mb-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante.
        Mauris eleifend, quam a vulputate dictum</p>
        </div>
      </div>
    </div>
  </div>
  )
} 
export default OurValue