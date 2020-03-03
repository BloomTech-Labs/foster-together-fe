export default function mapping(props) {
const rows = [];
props.Data.map(people => {
    if(people.match_name == undefined){
    rows.push({"name": `${people.first_name}, ${people.last_name}`, "type": {}, "contacted": people.contact, match: " None" ,"complete": "True", "id": people.family_id})
    console.log(rows)
    }
    else{
    rows.push({"name": people.last_name, "registered": people.memberSince, "contacted": people.contact, match: people.match_name ,"complete": "True", "id": people.family_id})
    }
})

props.Data2.map(people => {
  if(people.match_name == undefined){
  rows.push({"name": people.last_name, "registered": people.memberSince, "contacted": people.contact, match: " None" ,"complete": "True", "id": people.family_id})
  console.log(rows)
  }
  else{
  rows.push({"name": people.last_name, "registered": people.memberSince, "contacted": people.contact, match: people.match_name ,"complete": "True", "id": people.family_id})
  }
})
return rows
}