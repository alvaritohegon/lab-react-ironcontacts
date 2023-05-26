import allContacts from "../data/contacts.json";
import Table from 'react-bootstrap/Table';

function ContactsList() {
  const fiveContacts = allContacts.slice(0, 5);

  return (
    <div>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            </tr>
        </thead>
        <tbody>
            {fiveContacts.map((eachContact, index) => (
            <tr key={index}>
                <td>
                <img src={eachContact.pictureUrl} width={100}/>
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                <td>{eachContact.wonOscar ? "🏆" : null}</td>
                <td>{eachContact.wonEmmy ? "🏆" : null}</td>
            </tr>
            ))}
        </tbody>
        </Table>
    </div>
  );
}

export default ContactsList;