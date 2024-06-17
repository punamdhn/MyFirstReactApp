import "./App.css";
import "./Chicken/Chicken";
import { Chicken } from "./Chicken/Chicken";
import "./Greeter";
import { Greeter } from "./Greeter";
import Die from "./die";
import { ListPicker } from "./ListPicker";
import DoubleDice from "./doubleDice";
import Heading from "./Heading";
import Slots from "./Slots";
import ColorList from "./ColorList";
import ShopingList from "./ShopingList";
import PropertiesList from "./PropertiesList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import TogglerCounter from "./TogglerCounter";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const godNameList = [
  { id: 12345, name: "kashi viswanath temple", rating: 5.0, price: 500 },
  { id: 12346, name: "sankat mochan temple", rating: 4.0, price: 300 },
  { id: 12347, name: "durga kund temple", rating: 4.5, price: 200 },
  { id: 12348, name: "shakti mata temple", rating: 5.0, price: 500 },
  { id: 12349, name: "dukhharni mata temple", rating: 4.3, price: 300 },
  { id: 12350, name: "lilori mata temple", rating: 4.9, price: 600 },
  { id: 12351, name: "gaytri mata temple", rating: 4.4, price: 450 },
];

const colors = [
  "#606142",
  "#DFE61B",
  "#E61B48",
  "#343131",
  "#391920",
  "#22288F",
  "#6D70A9",
  "#B9409E",
  "#1F091A",
  "#AC8AA4",
  "#397E3F",
];

function App() {
  return (
    <>
      <ColorBoxGrid colors={colors} />
      {/* <TogglerCounter /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Clicker message="HII!!!" buttonText="please click me" /> */}
      {/* <Clicker message="please stop Clicking Me!!" buttonText="do not click" /> */}

      {/* <PropertiesList properties={godNameList} /> */}
    </>
  );
}

// const data = [
//   { name: "Ravi", roll_N: 5015, Grade: "D", title: "Mr" },
//   { name: "Punam", roll_N: 1234, Grade: "A+", title: "Mrs" },
//   { name: "Rohit", roll_N: 1235, Grade: "D", title: "Mr" },
//   { name: "Pinki", roll_N: 1236, Grade: "A+", title: "Mrs" },
// ];

// const data = [
//   { id: 1 item: "Eggs", quantity: 12, completed: false },
//   { id: 2 item: "milk", quantity: 2, completed: true },
//   { id: 3 item: "oil", quantity: 4, completed: false },
//   { id: 4 item: "mobile", quantity: 6, completed: true },
//   { id: 5 item: "hugges", quantity: 2, completed: true },
// ];
// return (
//   <>
//     <ShopingList items={data} />
{
  /* {data
        .filter((x) => x.Grade === "A+")
        .map((it) => (
          <Greeter person={it} />
        ))} */
}
{
  /* <Chicken />
      <Chicken />
      <Chicken />
      <Greeter person="Bill" from="Hotel shriyan" />
      <Greeter from="raj Hotel" />
      <Greeter person="Bill" />
      <Die numSides={20} />
      <Die />
      <Die numSides={5} />
      <Die numSides={2} />
      <ListPicker values={[25, 11, 2022]} />
      <ListPicker values={["punam", "vihaan", "purvi"]} />
      <Heading color="magenta" text="Welcome!!" fontSize="20px" />
      <Heading color="yellow" text="oh wow!!" fontSize="40px" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["yellow", "pink", "red"]} />
      <ColorList colors={["purple", "green", "gray", "blue"]} />
      <Slots val1="a" val2="a" val3="a" />
      <Slots val1="a" val2="b" val3="a" /> */
}

export default App;
