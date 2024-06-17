import Property from "./Property";

export default function PropertiesList({ properties }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      {(properties ?? []).map((property) => (
        <Property key={property.id} {...property} />
      ))}
    </div>
  );
}
