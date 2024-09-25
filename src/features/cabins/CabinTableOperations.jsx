import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <div>
      <TableOperations>
        <Filter
          filterField="discount"
          options={[
            { key: "all", label: "All" },
            { key: "with-discount", label: "With discounts" },
            { key: "no-discounts", label: "No discounts" },
          ]}
        />
        <SortBy
          options={[
            { key: "name-asc", label: "Sort by name (A-Z)" },
            { key: "name-desc", label: "Sort by name (Z-A)" },
            {
              key: "regularPrice-asc",
              label: "Sort by regular price (low first)",
            },
            {
              key: "regularPrice-desc",
              label: "Sort by regular price (high first)",
            },
            { key: "maxCapacity-asc", label: "Sort by capacity (low first)" },
            { key: "maxCapacity-desc", label: "Sort by capacity (high first)" },
          ]}
        />
      </TableOperations>
    </div>
  );
}

export default CabinTableOperations;
