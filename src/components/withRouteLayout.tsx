import React from "react"
import NavigationBar from "./NavigationBar"

interface Props{
      component:any;
    }

const withRoutLayout = (props:any) =>{
  //console.log(props)
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
          <NavigationBar/>
          <div >
            {props.component}
          </div>
        </div>
    )
}
export default withRoutLayout;
