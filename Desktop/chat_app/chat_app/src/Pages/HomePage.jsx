import ChatBoxContainer from "../Components/ChatBoxContainer"
import RightSide from "../Components/RightSide"
import SideBar from "../Components/SideBar"

const HomePage = () => {
  return (
    <div className="main_wrapper">
      <div className="main_container">
      <SideBar/>
      <ChatBoxContainer/>
      <RightSide/>
    </div>
    </div>
   
  )
}

export default HomePage
