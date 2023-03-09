import Card from './card'

function App() {
  const users =[ {
    image : "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    designation : "Graphic Designe",
    name : "Amit",
    description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
  },

  {
    image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    designation : "Singer",
    name : "Ruhi" ,
    description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays and other types of music groups. " ,
  } ]

  return (
    <div className="App">
      
    {users.map((data)=> {
       return( 
       <Card image={data.image} name = {data.name} designation = {data.designation} description={data.description} />
       )
    }
    )}



    </div>
  );
}

export default App;
