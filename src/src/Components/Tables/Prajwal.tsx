import FinalFormInput from "../Form/Final";
import FormikInputEnhanced from "../Form/Formik";
import HookFormInput from "../Form/Hook";
import Input from "../Form/Input";

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
    address: "123 Maple Street, Boston, MA",
  },
  {
    name: "Sarah Connor",
    age: 28,
    gender: "Female",
    address: "456 Oak Drive, New York, NY",
  },
  {
    name: "Michael Stone",
    age: 45,
    gender: "Male",
    married: true,
    address: "789 Pine Road, Los Angeles, CA",
  },
  {
    name: "Emily Clark",
    age: 34,
    gender: "Female",
    married: true,
    address: "321 Elm Avenue, Chicago, IL",
  },
  {
    name: "David Wilson",
    age: 29,
    gender: "Male",
    married: false,
    address: "654 Birch Lane, Houston, TX",
  },
  {
    name: "Emma Thompson",
    age: 37,
    gender: "Female",
    married: true,
    address: "987 Cedar Court, Phoenix, AZ",
  },
  {
    name: "James Miller",
    age: 41,
    gender: "Male",
    married: false,
    address: "135 Walnut Street, Philadelphia, PA",
  },
  {
    name: "Olivia Davis",
    age: 31,
    gender: "Female",
    married: true,
    address: "246 Spruce Drive, San Antonio, TX",
  },
  {
    name: "Daniel Brown",
    age: 26,
    gender: "Male",
    married: false,
    address: "369 Cherry Lane, San Diego, CA",
  },
  {
    name: "Sophia Martinez",
    age: 33,
    gender: "Female",
    married: true,
    address: "579 Ash Road, Dallas, TX",
  },
];

export default function PeopleTable() {
  return (
    <div className="flex  flex-col justify-center">
      <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Married
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {people.map((person, index) => (
              <tr
                key={index}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {person.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {person.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {person.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {person.married ? "Yes" : "No"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {person.address}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Input />
      </div>
      <div>
        <FinalFormInput />
      </div>
      <div>
        <HookFormInput />
      </div>
      <div>
        <FormikInputEnhanced />
      </div>
    </div>
  );
}
