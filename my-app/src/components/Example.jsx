import { useContext } from "react"
import AppContext from "../context/AppContext"

const Example = () => {
    const { state } = useContext(AppContext);

    return <div>
        {state}
    </div>
}

export default Example;