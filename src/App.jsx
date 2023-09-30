import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import NewsBox from "./components/NewsBox";
import { useState } from "react";

export default function App() {
  const pageSize = 12;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route
          exact
          path="/general"
          element={
            <NewsBox
              setProgress={setProgress}
              key="genrl"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <NewsBox
              setProgress={setProgress}
              key="bsns"
              pageSize={pageSize}
              country="us"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <NewsBox
              setProgress={setProgress}
              key="ent"
              pageSize={pageSize}
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <NewsBox
              setProgress={setProgress}
              key="hlt"
              pageSize={pageSize}
              country="us"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <NewsBox
              setProgress={setProgress}
              key="spt"
              pageSize={pageSize}
              country="us"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <NewsBox
              setProgress={setProgress}
              key="sci"
              pageSize={pageSize}
              country="us"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <NewsBox
              setProgress={setProgress}
              key="tech"
              pageSize={pageSize}
              country="us"
              category="technology"
            />
          }
        />

        <Route />
      </Routes>
    </>
  );
}
