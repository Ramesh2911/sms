import { FaTachometerAlt, FaUserGraduate, FaChalkboardTeacher, FaBook } from "react-icons/fa";

const Sidebar = () => {

  const role = localStorage.getItem("role");

  const itemStyle = {
    padding:"12px",
    cursor:"pointer",
    borderRadius:"6px"
  }

  return (

    <div style={{
      width:"240px",
      background:"#1e293b",
      color:"#fff",
      minHeight:"100vh",
      padding:"20px"
    }}>

      <h4 style={{marginBottom:"30px"}}>
        SCHOOL
      </h4>

      <div style={itemStyle}>
        <FaTachometerAlt/> Dashboard
      </div>

      {role === "admin" && (
        <>
          <div style={itemStyle}>
            <FaUserGraduate/> Students
          </div>

          <div style={itemStyle}>
            <FaChalkboardTeacher/> Teachers
          </div>

          <div style={itemStyle}>
            <FaBook/> Classes
          </div>
        </>
      )}

      {role === "teacher" && (
        <>
          <div style={itemStyle}>
            My Classes
          </div>

          <div style={itemStyle}>
            Attendance
          </div>

          <div style={itemStyle}>
            Marks
          </div>
        </>
      )}

      {role === "student" && (
        <>
          <div style={itemStyle}>
            My Courses
          </div>

          <div style={itemStyle}>
            Attendance
          </div>

          <div style={itemStyle}>
            Results
          </div>
        </>
      )}

    </div>

  )

}

export default Sidebar