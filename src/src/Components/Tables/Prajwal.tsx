interface Person {
  name: string;
  age: number;
  gender: string;
  married?: boolean;
  address: string;
}

const people: Person[] = [
  {
    name: "John Carter",
    age: 32,
    gender: "Male",
    married: true,
    address: "123 Maple Street, Boston, MA"
  },
  {
    name: "Sarah Connor",
    age: 28,
    gender: "Female",
    address: "456 Oak Drive, New York, NY"
  },
  {
    name: "Michael Stone",
    age: 45,
    gender: "Male",
    married: true,
    address: "789 Pine Road, Los Angeles, CA"
  },
  {
    name: "Emily Clark",
    age: 34,
    gender: "Female",
    married: true,
    address: "321 Elm Avenue, Chicago, IL"
  },
  {
    name: "David Wilson",
    age: 29,
    gender: "Male",
    married: false,
    address: "654 Birch Lane, Houston, TX"
  },
  {
    name: "Emma Thompson",
    age: 37,
    gender: "Female",
    married: true,
    address: "987 Cedar Court, Phoenix, AZ"
  },
  {
    name: "James Miller",
    age: 41,
    gender: "Male",
    married: false,
    address: "135 Walnut Street, Philadelphia, PA"
  },
  {
    name: "Olivia Davis",
    age: 31,
    gender: "Female",
    married: true,
    address: "246 Spruce Drive, San Antonio, TX"
  },
  {
    name: "Daniel Brown",
    age: 26,
    gender: "Male",
    married: false,
    address: "369 Cherry Lane, San Diego, CA"
  },
  {
    name: "Sophia Martinez",
    age: 33,
    gender: "Female",
    married: true,
    address: "579 Ash Road, Dallas, TX"
  }
];

export default function PeopleTable() {
  // Create array to store table rows
  const tableRows: React.ReactElement[] = [];

  // Generate table rows using for loop
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    tableRows.push(
      <tr key={i} className="hover:bg-gray-50 even:bg-gray-50 border-b">
        <td className="p-4 text-sm text-gray-900">{person.name}</td>
        <td className="p-4 text-sm text-gray-600">{person.age}</td>
        <td className="p-4 text-sm text-gray-600">{person.gender}</td>
        <td className="p-4 text-sm text-gray-600">
          {person.married ? "Yes" : "No"}
        </td>
        <td className="p-4 text-sm text-gray-600">{person.address}</td>
      </tr>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Prajwal Table</h1>
      
      <div className="overflow-hidden rounded-lg border shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Age</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Gender</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Married</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Address</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    </div>
  );
}