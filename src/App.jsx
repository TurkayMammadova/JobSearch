import { BrowserRouter, Routes, Route} from "react-router-dom";
import { MainContext } from "./context.jsx";
import Elanlar from "./pages/Elanlar.jsx";
import Kateqoriyalar from "./pages/Kateqoriyalar.jsx";
import Sirketler from "./pages/Sirketler.jsx";
import Haqqimizda from "./pages/Haqqimizda.jsx";
import Xidmetler from "./pages/Xidmetler.jsx";
import Elaqe from "./pages/Elaqe.jsx";
import { useState, useEffect } from "react";
import Detail_page from "./pages/Elanlar_detail.jsx";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import Job_description from "./components/Job_description/Job_description.jsx";
import About_company  from "./components/About_company/About_company.jsx";
import Sirketler_detail from "./pages/Sirketler_detail.jsx";
import Sechilmish_elanlar from "./pages/Sechilmish_elanlar.jsx";



function App() {
  const [ pathName, setPathName ] = useState("");
  const [ vacancyFilter, setVacancyFilter ] = useState(null);
  const [allData, setAllData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:8000/vacancies");
        let data = await response.json();
        setAllData(data.vacancies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log('AllDataaaaa',allData)
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };


  const [activeTab, setActiveTab] = useState(0);
  const [clickedVacancies, setClickedVacancies] = useState([]);
  
  const setCount = async (slug, currentLocation) => {
    let updatedData; 
  
    if (!clickedVacancies.includes(slug)) {
      if (currentLocation.search !== `?detail=vacancy:${slug}`) {
        updatedData = allData.map((d) =>
          d.slug === slug ? { ...d, views_count: d.views_count + 1 } : d
        );
        setAllData(updatedData);
      }
  
      setClickedVacancies([slug]);
    }
    const foundItem = updatedData.find((item) => item.slug === slug);
  
    if (foundItem) {
      try {
        const response = await fetch(`http://localhost:8000/update_views_count/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': 'your-csrf-token-here',
          },
          body: JSON.stringify({
            slug: slug,
            views_count: foundItem.views_count,
          }),
        });
  
        if (response.ok) {
          console.log("Successfully updated views_count in the database");
        } else {
          console.error("Failed to update views_count in the database");
        }
      } catch (error) {
        console.error("Error updating views_count:", error);
      }
    }
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(windowWidth < 1100 ? false : true);
 
  function handleMenu() {
    setMenu(!menu);
  }
const setIsLikes = async (slug) => {
  const updatedData = allData.map((data) => {
      if (data.slug === slug) {
          console.log("Previous to_choose value:", data.to_choose);
          const updatedItem = { ...data, to_choose: !data.to_choose };
          console.log("Updated item:", updatedItem);
          return updatedItem;
      } else {
          return data;
      }
  });
  setAllData(updatedData);
  
  try {
      const response = await fetch(`http://localhost:8000/update_likes/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': 'your-csrf-token-here',
          },
          body: JSON.stringify({
              slug: slug,
              to_choose: updatedData.find(item => item.slug === slug).to_choose,
              
          }),
      });

      if (response.ok) {
          console.log("Successfully updated likes in the database");
      } else {
          console.error("Failed to update likes in the database");
      }
  } catch (error) {
      console.error("Error updating likes:", error);
  }
};

  const selectedVacancies = allData.filter((data) => data.to_choose ===true);
  console.log('Secilmissss', selectedVacancies);

  const getVacancyDetailBySlug = (allData,slug) => {
    const vacancySlug = (slug);
    return allData.find((vacancy) => vacancy.slug === vacancySlug);
  };
  const getCompanyDetailBySlug = (allData,slug) => {
    const companySlug = (slug);
    return allData.find((data) => data.company_id.slug === companySlug);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.style.setProperty("--color_bg", "#ffffff");
      root.style.setProperty("--color_title", "black");
      root.style.setProperty("--color_text", "rgba(0,0,0,.7)");
      root.style.setProperty("--color_hover", "white");
      root.style.setProperty("--color_hover_bg", "#0c4dde");
      root.style.setProperty("--color_span", "rgba(0,0,0,.5)");
      root.style.setProperty("--color_span_info", "rgba(0,0,0,.3)");
      root.style.setProperty("--color_box", "rgba(12,77,222,.05)");
      root.style.setProperty("--hover_color_btn","white");
      root.style.setProperty("--hover_bg_btn","#0c4dde");
      root.style.setProperty("--color_blue", "#0c4dde");
      root.style.setProperty("--color_print","#5b5b5b");
      root.style.setProperty("--color_complain","red");
      root.style.setProperty("--color_deadline","#de7d0b");
      root.style.setProperty("--img", "multiply");
      root.style.setProperty("--color_back","blue");
      root.style.setProperty("--color_bg_image", "rgba(12,77,222,.05)");
    } else if (theme === "dark") {
      root.style.setProperty("--color_bg", "rgb(41, 41, 41)");
      root.style.setProperty("--color_title", "white");
      root.style.setProperty("--color_text", "white");
      root.style.setProperty("--color_hover", "white");
      root.style.setProperty("--color_hover_bg", "#0c4dde");
      root.style.setProperty("--color_span", "gray");
      root.style.setProperty("--color_span_info", " rgb(64, 64, 64)");
      root.style.setProperty("--color_box", " rgb(64, 64, 64)");
      root.style.setProperty("--hover_color_btn","black");
      root.style.setProperty("--hover_bg_btn","white");
      root.style.setProperty("--color_blue", "white");
      root.style.setProperty("--color_print","white");
      root.style.setProperty("--color_complain","white");
      root.style.setProperty("--color_deadline","white");
      root.style.setProperty("--img", "color");
      root.style.setProperty("--color_back","rgb(41, 41, 41)");
      root.style.setProperty("--color_bg_image", "rgb(143, 131, 131)");
    }
  }, [theme]);

  const data = {
    theme,
    setTheme,
    activeTab,
    setActiveTab,
    allData,
    setAllData,
    setIsLikes,
    setCount,
    getVacancyDetailBySlug,
    selectedVacancies,
    getCompanyDetailBySlug,
    pathName,
    setPathName,
    vacancyFilter,
    setVacancyFilter,
    switchTheme,
    menu,
    setMenu,
    handleMenu,
    windowWidth,
    setWindowWidth,
 
  };
  return (
    <BrowserRouter>
      <MainContext.Provider value={data}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/">
              <Route index element={<Elanlar />} />
              <Route path=":slug/" element={<Detail_page />}>
                <Route path="about_company" element={<About_company />} />
                <Route path="job_description" element={<Job_description />} />
              </Route>
            </Route>
            <Route path="kateqoriyalar" element={<Kateqoriyalar />} />

            <Route path="sirketler" >
              <Route index element={<Sirketler />} />
              <Route path=":slug/" element={<Sirketler_detail />}>
                <Route path="about_company" element={<About_company />} />
                <Route path="job_description" element={<Job_description />} />
              </Route>
            </Route>
        
            <Route path="secilmish_elanlar" element={<Sechilmish_elanlar />} />
            <Route path="haqqimizda" element={<Haqqimizda />} />
            <Route path="xidmetler" element={<Xidmetler />} />
            <Route path="elaqe" element={<Elaqe />} />
          </Route>
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
