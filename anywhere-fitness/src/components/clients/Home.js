import React, {useState, useEffect} from 'react';
import Select from 'react-select'
import axios from 'axios';
import ClassCards from './ClassCards'
const classTypes = [
 { label: "Yoga", value: 1 },
 {label: "Weightlifting", value: 2},
 {label: "Biking/Spin", value: 3},
 {label: "Functional Fitness", value: 4},
 {label: "Boxing", value: 5},
 {label: "Cardio", value: 6},
 {label: "stretch", value: 7},
 {label: "Dance", value: 8},
 {label: "Stretch", value: 9},
 {label: "Running", value: 10},
 {label: "Boot camp", value: 11}
]

const ClassDuration = [
  { label: "0-15 min", value: 1 },
 {label: "15-30 min", value: 2},
 {label: "30-45 min", value: 3},
 {label: "45-60 min", value: 4},
 {label: "60+ min", value: 5}
]

const ClassTime = [
  { label: "Early Morning", value: 1 },
 {label: "Late Morning", value: 2},
 {label: "Midday", value: 3},
 {label: "Early Afternoon", value: 4},
 {label: "late Afternoon", value: 5},
 {label: "Early Evening", value: 6},
 {label: "Late Evening", value: 7}
]

const ClassLevel = [
  { label: "Beginner", value: 1 },
 {label: "Intermediate", value: 2},
 {label: "Advanced", value: 3},
]
function Home() {
  const [Classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");

useEffect(() => {
  axios.get('https://anywhere-fitness-api.herokuapp.com/api/client/profile')
    .then(response => {
      console.log("User Information", response); 
    })
    .catch(error => {
      console.log("Unable to retrieve data", error);
    })

}, []);

  useEffect(() => {
    axios.get('https://anywhere-fitness-api.herokuapp.com/api/classes')
      .then(response => {
        console.log("This is the class list", response)
        const data = response.data.results
        const result = data.filter(classes => 
          classes.name
          .toLowerCase()
          .includes(search.toLowerCase())
          );
          console.log(result);
          setClasses(result);
      })
      .catch(error => {
        console.log("Data could not be retrieved", error);
      })
  }, [search]);

    const handleInputChange = event => {
      setSearch(event.target.value);
    };


    return (
        <>
        <section>
        <h1>Anywhere Fitness</h1>   
        <form>
        <input
           type="text" 
           onChange={handleInputChange}
           value={search}
           name="name"
           tabIndex="0"
           className="search-bar"
           placeholder="Search for a class"
           autoComplete="on"
        />
        </form>
        <ul>
            <li>About</li>
            <li>Welcome, John!</li>
        </ul>
        </section>
        <div>
          <Select options={classTypes} isMulti/>
          <Select options={ClassDuration} isMulti/>
          <Select options={ClassTime} isMulti/>
          <Select options={ClassLevel} isMulti/>
        </div>
        <div>
          <div>
          {Classes.map((classes, index) => {
            return (
              <ClassCards key={index}
              name={classes.name}
              type={classes.type}
              location={classes.location}
              description={classes.description}
              />
            )
          })}
          </div>
          <div>

          </div>
        </div>
          </>
    );
  }
  
  export default Home;