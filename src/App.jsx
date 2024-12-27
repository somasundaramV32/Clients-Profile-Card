import ProfileCard from './Components/ProfileCard'

function App() {
  const profiles = [
    {
      name: "Somsundaram V",
      place: "Chennai",
      role: "Web Developer / UI&UX Designer",
      image: "",
      status: false,
      skills: ["UI/UX-Designer", "Web Developer"]
    },
    {
      name: "Bharath P",
      place: "Chennai",
      role: "Web Developer",
      image: "",
      status: true,
      skills: ["UI/UX-Designer", "Web Developer"]
    },
    {
      name: "Rakesh Kumar S",
      place: "Neelankarai",
      role: "Web Developer / Automation Tester",
      image: "",
      status: false,
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      name: "Yogendharan V",
      place: "Chennai",
      role: "Web Developer / UI&UX Designer",
      image: "",
      status: true,
      skills: ["JavaScript", "React", "Machine Learning"]
    }, 
    {
      name: "Karthick E",
      place: "Tamabaram",
      role: "Web Developer",
      image: "",
      status: false,
      skills: ["Python", "Machine Learning", "React","Data Analysis"]
    }
  ];

  return (
    <>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name} 
          place={profile.place} 
          role={profile.role} 
          image={profile.image} 
          status={profile.status}
          skills={profile.skills} 
        />
      ))}
    </>
  );
}

export default App;
