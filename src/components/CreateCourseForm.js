import React from 'react';

const CreateCourseForm = () => {
  const [state, setState] = React.useState({
    name: '',
    description: '',
    startDate: '',
    endDate: ''
  });
  console.log(state);
  const handleChange = event => {
    console.log(
      'target name:',
      event.target.name,
      'target value:',
      event.target.value
    );
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    fetch('/api/v1/post/CreateNewCourse', {
      method: 'post',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // .then(res=>{
    //   res.json()
    // }).then(json=>{

    // })
  };

  return (
    <div style={{ padding: 10, margin: 10 }}>
      <h2>Add a new course</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={state.description}
        />
        <br />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={state.startDate}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          name="endDate"
          value={state.endDate}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCourseForm;
