import './App.css';
import { useState } from 'react';

function App() {
  const [userInfo, setUserinfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    prompt1: '',
    answer1: '',
  });

  const [prompts, setPrompt] = useState([
    {
      prompt: '',
      answer: '',
      timeStamp: new Date().getTime(),
    },
  ]);

  console.log(prompts);
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserinfo({ ...userInfo, [name]: value });
  };

  const handlePrompt = (e, i) => {
    const { name, value } = e.target;

    let newPrompt = [...prompts];

    newPrompt[i][name] = value;

    setPrompt(newPrompt);
  };

  const handlAdd = () => {
    setPrompt([
      ...prompts,
      {
        prompt: '',
        answer: '',
        timeStamp: new Date().getTime(),
      },
    ]);
  };

  const handleDelete = (i) => {
    let deletePrompts = [...prompts];
    deletePrompts.splice(i, 1);
    setPrompt(deletePrompts);
  };
  return (
    <>
      <h1 className=" text-3xl text-center my-2 py-2">React Form</h1>
      <form className=" w-5/6 max-w-xl mx-auto pt-4 pb-10 ">
        <fieldset className=" flex flex-col border  py-2">
          <legend className=" text-2xl  font-semibold mb-2 text-gray-500">
            About You
          </legend>

          <div className="p-2">
            <label className=" text-2xl font-semibold">Whats Your Name?</label>
            <input
              id="firstName"
              name="firstName"
              placeholder="First Name is ...."
              type="text"
              onChange={handleInput}
              className="  w-4/5  border  rounded  text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200 "
            />
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name is ...."
              onChange={handleInput}
              className="  w-4/5  border  rounded  text-lg leading-tight py-3 px-2 focus:outline-indigo-200 "
            />
          </div>
          <div className="p-2">
            <label className=" text-2xl font-semibold">Whats Your email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleInput}
              className="  w-4/5  border  rounded  text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200 "
              placeholder="Your email address"
            />
          </div>
          <div className="p-2">
            <label className=" text-2xl font-semibold">
              Whats Your date of Birth
            </label>
            <input
              className="  w-3/5  border  rounded  text-lg leading-tight py-3 px-2 focus:outline-indigo-200 "
              id="dob"
              name="dob"
              type="date"
              onChange={handleInput}
            />
          </div>
          <div className=" p-2 flex flex-col">
            <label className=" text-2xl font-semibold">Whats Your Gender</label>
            <select
              className=" w-3/5 border rounded text-lg loading-tight py-3 px-2 mt-4 mb-3 focus: outline-indigo-200  "
              id="gender"
              name="gender"
              onChange={handleInput}
            >
              <option>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="mtf">MTF</option>
            </select>
          </div>
        </fieldset>
        <fieldset className=" flex flex-col border py-2">
          <legend className=" text-2xl  font-semibold mb-2 text-gray-500">
            Prompts
          </legend>

          {prompts.map((prompt, i) => (
            <div key={prompt.timeStamp} className=" flex flex-col">
              <label className=" text-2xl font-semibold">select a Prompt</label>
              <div className=" flex flex-row items-center gap-2">
                <select
                  className=" w-3/5 border rounded text-lg loading-tight  py-3 px-2 mt-4 mb-3 focus: outline-indigo-200  "
                  id="Prompt"
                  name="prompt"
                  onChange={(e) => handlePrompt(e, i)}
                >
                  <option>Select a prompt</option>
                  <option value="Dating me is like ...">
                    Dating Me is like ...
                  </option>
                  <option value="Fact about me">
                    facts about me that surprise people
                  </option>
                  <option value="I want someone who...">
                    I want someone who...
                  </option>
                  <option value="I spent most of my money on">
                    I spent most of my money on
                  </option>
                  <option value="The Moat spontaneous thing about me ">
                    The Moat spontaneous thing about me
                  </option>
                  <option value="We are the same type of weired if ... ">
                    We are the same type of weired if ...
                  </option>
                </select>
                <button
                  onClick={() => handleDelete(i)}
                  className=" border bg-red-400 py-2.5 px-4 rounded-lg text-white font-bold text-xl"
                >
                  {' '}
                  -{' '}
                </button>
              </div>
              <textarea
                id="answer1"
                name="answer1"
                rows={5}
                placeholder="Let your true color shine through"
                className=" border border-dashed px-3 py-2 mb-4"
                onChange={(e) => handlePrompt(e, i)}
              />
            </div>
          ))}
          <div className=" w-full flex justify-center items-center">
            <button
              onClick={handlAdd}
              type="button"
              className=" border bg-indigo-400 py-1 px-2 rounded-lg text-white font-bold text-xl"
            >
              {' '}
              Add Prompt
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
