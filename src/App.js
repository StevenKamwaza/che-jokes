import React, { useEffect, useState } from "react";
import NavMenu from "./pages/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./joke.css"
function App() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {

    function fetchData() {
        fetch('https://api.icndb.com/jokes')
            .then(items => items.json())
            .then(results => {
                setData(results.value)
                
            })
            .catch(err => { })
    }
   
    fetchData();
    console.log(data)
    
  }, [])
  
  const likeMe = () =>{
    alert("Liked 😍❤😂❤")
  }

  const dislikeMe = ()=>{
    alert("Hated 😒😊😒🤷‍♂️")
  }

  return (
    <div className="App">
       <NavMenu/>
        <div className="container">
            <div className="row">
                <h3 className="text-center m-3">Laughter Is a Medecine, its time to laught</h3>

            </div>
            <div className="row">
                <div className="vertical-scrollable">
                    {
                      data.map((item, key)=>{
                        return(
                          <div className="card mb-2">
                            <p className="card-subtitle mb-2 text-muted m-2">{item.categories}</p>
                            <div className="card-body">
                              <p className="card-text p-3">{item.joke}</p>
                              <span className="nav">
                                <a onClick={likeMe} className="nav-link">Like 👍</a>
                                <a onClick={dislikeMe} className="nav-link">Unlike 👎</a>
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
