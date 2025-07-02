// const [notes, setnotes] = useState([])
  // const [newnote, setNewNote] = useState('')
  // const [isImp, setisImp] = useState(false)
  // const [showAll, setshowAll] = useState(true)

  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/notes')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setnotes(response.data)
  //     })
  // }, [])
  // console.log('render', notes.length, 'notes')


  // const handleInputChange =(event) => {
  //   setNewNote(event.target.value)
  // }
  // const addNote =(event)=> {
  //   event.preventDefault()

  //   if (newnote===""){
  //     alert('Please write something...')
  //     return
  //   }
  //   const newobj = {
  //     content: newnote,
  //     important: isImp, // randomly mark as important
  //     id: String(notes.length + 1),
  //   }
  //   console.log(newobj.important)
  //   axios
  //     .post('http://localhost:3001/notes', newobj)
  //     .then(response => 
  //     {setnotes(notes.concat(response.data))
  //     setNewNote('')
  //     setisImp(false)
  // })}
  
  
  

  // const toogleImp = () => {
  //   const newValue = !isImp;
  //   setisImp(newValue);
  //   return newValue;
  // }

  // const idtoogleImp = (id) => {
  //   const url = `http://localhost:3001/notes/${id}`
  //   const note = notes.find(n=> n.id === id)
  //   const change ={...note, important: !note.important}
  //   console.log(note.important)
  //   axios
  //     .put(url,change)
  //     .then(response => {setnotes(notes.map(note => note.id === id ? response.data : note))})
  // }



  // const notesToShow = notes.filter(note=> 
  //                       note.important)
  //                       .map((note,i )=> 
  //                         <li key={i}>
  //                           {note.id}--{note.content}----<button type="button" onClick={()=>idtoogleImp(note.id)}>
  //                             Important
  //                           </button>
  //                         </li>)
  // const toogleShow = () =>{
  //   const showans = setshowAll(!showAll)
  //   return showans
  // }
  // return(
  //   <>
  //     <h2>Add Notes....</h2>
  //     <form onSubmit={addNote}>
  //       <input type="text" value= {newnote} onChange={handleInputChange}/>
  //       <button type="button" onClick={toogleImp}>
  //         {isImp ? "★ Important" : "☆ Not Important"}
  //       </button>
  //       <button>Save</button>
  //     </form>
  //     <h3>Important Notes...</h3>
  //     <button type="button" onClick={toogleShow}>
  //         {showAll ? "Important Notes Only" : "ShowAll" }
  //     </button>
  //     {showAll? notes.map((note,i)=> 
  //                 <li key={i}>
  //                   {note.id}--{note.content}----
  //                   <button type="button" onClick={()=>idtoogleImp(note.id)}>
  //                     {note.important ? "★ Important" : "☆ Not Important"}
  //                   </button>
  //                 </li>):notesToShow}

  //   </>
  // )







  
  












  // const [notes, setnotes] = useState([])
  //  const [newNote, setNewNote] = useState(
  //   'a new note...'
  // ) 
  // const addNote = (event)=>{
  //   event.preventDefault()
  //   const newnoteObjt = {
  //     content : newNote,
  //     important: Date.now().toString(), 
  //     id: String(notes.length + 1),
  //   }
  //   console.log(newnoteObjt)
  //   setnotes(notes.concat(newnoteObjt))
  //   setNewNote('')
    
  // }
  
  // const handleNotechange = (event) =>{
  //   console.log('Value :', event.target.value)
  //   setNewNote(event.target.value)
  // }

  // return(
  //   <>
  //     <h3>Add Notes</h3>
  //     <form onSubmit={addNote}>
  //       <input type="text" value={newNote} onChange={handleNotechange}/>
  //       <button >Submit</button>
  //     </form>
  //     <h4>Notes....</h4>
  //     {notes.map((note,i)=> <li key={i}><p>Importance : {note.important}</p><p>{note.id}</p><p>{note.content}</p></li>)}
  //   </>
  // )

  // const courses = [
  //   {
  //     name: 'Half Stack application development',
  //     id: 1,
  //     parts: [
  //       {
  //         name: 'Fundamentals of React',
  //         exercises: 10,
  //         id: 1
  //       },
  //       {
  //         name: 'Using props to pass data',
  //         exercises: 7,
  //         id: 2
  //       },
  //       {
  //         name: 'State of a component',
  //         exercises: 14,
  //         id: 3
  //       },
  //       {
  //         name: 'Redux',
  //         exercises: 11,
  //         id: 4
  //       }
  //     ]
  //   }, 
  //   {
  //     name: 'Node.js',
  //     id: 2,
  //     parts: [
  //       {
  //         name: 'Routing',
  //         exercises: 3,
  //         id: 1
  //       },
  //       {
  //         name: 'Middlewares',
  //         exercises: 7,
  //         id: 2
  //       }
  //     ]
  //   }
  // ]
  // console.log('Start')
  

  // return(
  //   <>
      
      
  //     <h1>Web development curriculum</h1>
  //     {courses.map((course, i) => 
  //       <h2 key={i}>
  //         {course.name}
  //         <p>
  //           {course.parts.map((part,i)=> 
  //           <li key={i}>
  //             {part.name} {part.exercises}
  //           </li>)}
  //         </p>
  //       </h2>)}
        




      {/* {courses.map((courses, i) => <h2 key={i}>{courses.name}</h2>)}
        <div key={courses.id}>
          <h2></h2>

        </div>
      <h2>{courses.name}</h2>
      <ul>
        {courses.map((part, i) => <li key={i}>{part.name} {part.exercises}</li>)}
        
      </ul>
      <p>Total Exercises : {total}</p> */}
    // </>
  

  
  // const notes = [
  //   {
  //     id: 1,
  //     content: 'HTML is easy',
  //     important: true
  //   },
  //   {
  //     id: 2,
  //     content: 'Browser can execute only JavaScript',
  //     important: false
  //   },
  //   {
  //     id: 3,
  //     content: 'GET and POST are the most important methods of HTTP protocol',
  //     important: true
  //   }
  // ]
  // return(
  //   <>
  //     <h2>
  //       <ul>
          
  //         {notes.map(notes=> <li key={notes.id}>{notes.content}</li>)}
  //       </ul>
  //     </h2>
  //   </>
  // )







  // const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
  // const anecdotes = [
  //   'If it hurts, do it more often.',
  //   'Adding manpower to a late software project makes it later!',
  //   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  //   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  //   'Premature optimization is the root of all evil.',
  //   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  //   'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  //   'The only way to go fast, is to go well.'
  // ]

  // const [selected, setselected] = useState(0)
  // const [votes, setvotes] = useState([0,0,0,0,0,0,0,0])

  // const getRandom = () => {
  //   const num = Math.floor(Math.random() * 8)
  //     console.log(num); // This is JS
  //     setselected(num)
  // }

  // const addvote = () => {
  //   const newvotes = [...votes]
  //     newvotes[selected]+=1
  //     setvotes(newvotes)

  // }
  // const maxvotes = Math.max(...votes)
  // const indexofmaxvotes = votes.indexOf(maxvotes)

  // return(
  //   <>
  //     <h1>Anecdotes of the day...</h1>
  //     <p>{anecdotes[selected]}</p>
  //     <p>Votes : {votes[selected]}</p>
  //     <Button onClick= {() => addvote() } text={'Vote'}></Button>
  //     <Button onClick={()=> getRandom()} text= 'Next'></Button>

  //     <h3>Most useful Anecdotes of the day..</h3>
  //     <p>{anecdotes[indexofmaxvotes]}</p>

      
      
      
  //   </>
  // )

  // const [good, setgood] = useState(0)
  // const [neutral, setneutral] = useState(0)
  // const [better, setbetter] = useState(0)
  // const [all, setall] = useState(0)

  // const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  // const StaticLine = ({text, value}) => {
  //   return(
  //     <tr>
  //       <td>{text} : {value}</td>
  //     </tr>
  //   )
  // }

  // const Statistics = ({good, neutral, better, all}) => {
  
  //     return(
  //       <table>
  //         <tbody>
  //           <StaticLine text='Good :' value={good} />
  //           <StaticLine text='Neutral :' value={neutral} />
  //           <StaticLine text='Better :' value={better} />
  //           <StaticLine text='Total no. of feed back :' value={good} />
  //         </tbody>
  //       </table>
  //   )
  // }
    
  


  // return(
  //   <>
  //     <div><h1>Give Feedback....</h1></div>
  //     <Button onClick={() => {setgood(good+1); setall(all+1)}} text='Good' />
  //     <Button onClick={() => {setneutral(neutral+1); setall(all+1)}} text='Neutral' />
  //     <Button onClick={() => {setbetter(better+1); setall(all+1)}} text='Better' />
  //     <Statistics good={good} neutral={neutral} better= {better} all = {all}    />
      

  //   </>
  // )

//   const [left, setleft] = useState(0)
//   const [right, setright] = useState(0)
//   const [allclicks, setallclicks] = useState([])
//   const [total, settotal] = useState(0)

//   const History = (props) => {
//     if (props.allclicks.length === 0) {
//       return(
//       <p>the app is used by pressing the buttons</p>)
//     }
//     return (
//       <div>button press history: {props.allclicks.join(' , ')}</div>
//     )
//   }

//   const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  
  
//   const handleleftclick = () => {
//     setallclicks(allclicks.concat('L'))
//     setleft(left + 1)
//     settotal(total + 1)
//   }
//   const handlerightclick = () => {
//     setallclicks(allclicks.concat('R'))
//     setright(right + 1)
//     settotal(total + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleleftclick} text='Left+' />
//       <Button onClick={handlerightclick} text="Right+" />

      
//       {right}
//       <p>No. of times button clicked : {total}</p>
//       <History allclicks={allclicks} />
//     </div>
//   )