
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {

const users = [
  {
    img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',
    intro:'',
    color:'royalblue',
    tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'lightseagreen',
    tag:'Underserved'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    intro:'',
    color:'orange',
    tag:'Underbanked'
  },
   {
    img:'https://plus.unsplash.com/premium_photo-1661585613424-84bbf3227b08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
    intro:'',
    color:'pink',
    tag:'Underrobbbed'
  },

{
  img:'https://plus.unsplash.com/premium_photo-1661584050716-01a68df85411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
  intro:'',
  color:'black',
  tag:'Average'
}
]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      
    </div>
  )
}

export default App

