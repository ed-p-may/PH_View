import "./styles/App.css";
import "./styles/Sidebar.css";
import theme from "./styles/theme";

import { useParams } from "react-router-dom";

import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import Home from "./components/Pages/Home";
// import CertificationResults from "./components/Pages/CertificationResults";
// import GlazingTypes from "./components/Pages/GlazingTypes";
// import FrameTypes from "./components/Pages/FrameTypes";
// import WindowUnitTypes from "./components/Pages/WindowUnitTypes";
// import Ventilation from "./components/Pages/Ventilation";
// import Pumps from "./components/Pages/Pumps";
// import Fans from "./components/Pages/Fans";
// import Lighting from "./components/Pages/Lighting";
// import Appliances from "./components/Pages/Appliances";
// import Materials from "./components/Pages/Materials";
// import Constructions from "./components/Pages/Constructions";

function TeamA() {
  let { pathID }: any = useParams();
  console.log("in TeamA...");
  console.log("pathID:", pathID);
  return <div>In TeamA... {pathID}</div>;
}
function TeamB() {
  let { pathID }: any = useParams();
  console.log("in TeamB...");
  console.log("pathID:", pathID);
  return <div>In TeamB... {pathID}</div>;
}
function TeamC() {
  let { pathID }: any = useParams();
  console.log("in TeamC...");
  console.log("pathID:", pathID);
  return <div>In TeamC... {pathID}</div>;
}

// function Router(props: { children?: React.ReactNode }) {
//   const { children } = props;
//   return <BrowserRouter>{children}</BrowserRouter>;
// }

function App() {
  console.log("In App.tsx");

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack className="App" direction="row">
          {/* <Sidebar /> */}
          <Routes>
            <Route element={<TeamB />} path="/:projectId/f" />
            <Route element={<TeamA />} path=":projectId/f" />
            <Route element={<TeamC />} path="*/" />
            {/* <Route path="/PH_View/:projectId/home" element={<Home />} />
            <Route path="/:projectId/fans" element={<Fans />} />
            <Route path="/PH_View/:projectId/cert-results" element={<CertificationResults />} />
            <Route path="/PH_View/:projectId/glazing-types" element={<GlazingTypes />} />
            <Route path="/PH_View/:projectId/frame-types" element={<FrameTypes />} />
            <Route path="/PH_View/:projectId/window-unit-types" element={<WindowUnitTypes />} />
            <Route path="/PH_View/:projectId/ventilation" element={<Ventilation />} />
            <Route path="/PH_View/:projectId/pumps" element={<Pumps />} />
            <Route path="/PH_View/:projectId/fans" element={<Fans />} />
            <Route path="/PH_View/:projectId/lighting" element={<Lighting />} />
            <Route path="/PH_View/:projectId/appliances" element={<Appliances />} />
            <Route path="/PH_View/:projectId/materials" element={<Materials />} />
            <Route path="/PH_View/:projectId/constructions" element={<Constructions />} />
            <Route path="/PH_View/:projectId/*" element={<Home />} /> */}
          </Routes>
        </Stack>
      </ThemeProvider>
    </Router>
  );
}

export default App;
