export default function mapping(props) {
const rows = [];
props.Data.map(people => {
    if(people.match_name == undefined){
    rows.push({"name": `${people.first_name}, ${people.last_name}`, "type": "Parent", match: "none", city: people.city})
    }
    else{
    rows.push({"name": `${people.first_name}, ${people.last_name}`, "type": "Parent", match: "none", city: people.city})
    }
})

props.Data2.map(people => {
  if(people.match_name == undefined){
  rows.push({"name": `${people.first_name}, ${people.last_name}`, "type": "Parent", match: "none", city: people.city})
  }
  else{
  rows.push({"name": `${people.first_name}, ${people.last_name}`, "type": "Parent", match: "none", city: people.city})
  }
})

return rows

}