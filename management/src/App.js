import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '1111111',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '김태형',
  'birthday': '981105',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'ㅋㅋ',
  'birthday': '234234',
  'gender': '남자',
  'job': '대학생'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
            key={c.id} // key값이라는 unique값을 하나 포함해야함
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
