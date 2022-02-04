import "./App.css";

export default function App() {

  const data = [
    {
      name: "Joey",
      picture: "https://www.koimoi.com/wp-content/new-galleries/2020/05/friends-trivia-18-matt-leblanc-aka-joey-tribbiani-auditioned-with-just-11-got-himself-this-after-his-first-paycheck-001.jpg",
    },

    {
      name: "Chandler",
      picture:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/chandler_bing_0.jpg", 

    },

    {
      name: "Monica",
      picture: "https://twinfinite.net/wp-content/uploads/2020/08/Screen-Shot-2020-08-18-at-8.33.40-AM.jpg",
    },

    {
      name: "Ross",
      picture: "https://i0.wp.com/devsari.com/wp-content/uploads/2020/09/ross_geller_friends_1863.jpg?fit=1200%2C675&ssl=1",
    },

    {
      name: "Rachel",
      picture: "https://i.insider.com/60df26ce4a93e20019129a3d?width=700",
    },
    {
      name: "Phoebe",
      picture: "https://www.koimoi.com/wp-content/new-galleries/2020/06/friends-phoebe-buffay-lisa-kudrow-reveals-getting-her-car-checked-daily-while-returning-from-the-sets-to-make-sure-she-wasnt-a-thief-001.jpg"
    }

  ]

  return (
    <div className="App">
      {data.map((info) => (
        <AddRemove name={info.name} image={info.picture} />
      ))}
    </div>
  );
}

function AddRemove(props){
  
   return(
     <div>
       <h1>Hello there! this is {props.name}</h1>
       <img className="imgClass" src={props.image} alt="profile"></img>
     </div>
   )
    
 }



