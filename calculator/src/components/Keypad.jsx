import { BUTTON_DATA } from "../utils/constants"
import Button from "./Button"

const Keypad = ({click}) => {
 
  return (
    <div id="keypad">
        {
            BUTTON_DATA.map((data) => {
                return <Button value={data.value} key={data.value} handleClick={()=>click(data.value)}/>
            })
        }
 
    </div>
  )
}

export default Keypad