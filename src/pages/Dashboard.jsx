import Sidebar from "../components/Sidebar";
import AdminPanel from "../components/AdminPanel";
import TeacherPanel from "../components/TeacherPanel";
import StudentPanel from "../components/StudentPanel";
import Header from "../components/Header";

const Dashboard = () => {

  const role = localStorage.getItem("role");

  return (

    <div style={{display:"flex"}}>

      <Sidebar/>

      <div style={{flex:1}}>

        <Header/>

        <div style={{padding:"20px"}}>

          {role === "admin" && <AdminPanel/>}
          {role === "teacher" && <TeacherPanel/>}
          {role === "student" && <StudentPanel/>}

        </div>

      </div>

    </div>

  )

}

export default Dashboard