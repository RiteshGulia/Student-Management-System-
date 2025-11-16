import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import StudentForm from './Components/pages/StudentForm';
import StudentDetails from './Components/pages/StudentDetails';
import Login from './Components/login';
import AppLayout from './Components/AppLayout';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Registration from './Components/RegistrationForm';
import ForgotPass from './Components/ForgetPass';
import './App.css';
import Dashboard from './Components/Dashboard';
import TeacherForm from './Components/pages/TeacherForm';
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/ForgotPass" element={<ForgotPass />} /> 
         <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="studentForm" element={<StudentForm /> }/>
          <Route path="teacherForm" element={<TeacherForm />} />
          <Route path="studentDetails" element={<StudentDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;