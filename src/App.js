import './App.css';
import MyCard from './components/Card';
import CreateCourseForm from './components/CreateCourseForm';
import SimpleCard from './components/SimpleCard';
import Navbar from './components/Navbar';

import React from 'react';
// import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [state, setState] = React.useState({ test: 'alex info', data: [] });

  React.useEffect(() => {
    console.log('i am running');
    fetch('/api/v1/get/AllCourses')
      .then(res => res.json())
      .then(res => setState({ data: res.data }));
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="App"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          flex: 1,
          padding: '15px'
        }}
      >
        {state.data.map(item => (
          <MyCard
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>
      <CreateCourseForm />
      <SimpleCard />
    </div>
  );
};

export default App;
