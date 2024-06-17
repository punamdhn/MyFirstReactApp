import ShoppingListItem from "./ShoppingListItem";
export default function ShopingList({ items }) {
  return (
    <>
      <ul>
        {items.map((i) => (
          <ShoppingListItem
            key={i.id}
            item={i.item}
            quantity={i.quantity}
            completed={i.completed}
          />
          //   <ShoppingListItem key={i.item} {...i} />
        ))}
      </ul>
    </>
  );
}

const data = [
  { item: "Eggs", quantity: 12, completed: "false" },
  { item: "milk", quantity: 2, completed: "true" },
  { item: "oil", quantity: 4, completed: "false" },
  { item: "mobile", quantity: 6, completed: "true" },
];
