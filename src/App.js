import React, { useEffect, useState } from "react";
import NavMenu from "./pages/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {

    function fetchData() {
        fetch('http://api.icndb.com/jokes')
            .then(items => items.json())
            .then(results => {
                setData(results.value)
            })
            .catch(err => { })
    }
   
    fetchData();
    
  }, [])

  console.log(data)

  return (
    <div className="App">
       <NavMenu/>
        <div className="container">
            <div className="row">
                <h3 className="text-center m-3">Laughter Is a Medecine, its time to laught</h3>

            </div>
            <div className="row">
                <div className="">
                    {
                      data.map((item, key)=>{
                        return(
                          <div className="card mb-2">
                            <div className="card-body">
                              <p className="card-text">{item.joke}</p>
                              <span className="nav">
                                <a  className="nav-link">Like 👍</a>
                                <a  className="nav-link">Unlike 👎</a>
                              </span>
                            </div>
                          </div>
                        )
                      })
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
