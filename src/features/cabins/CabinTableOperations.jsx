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
            { value: "all", label: "All" },
            { value: "with-discount", label: "With discounts" },
            { value: "no-discount", label: "No discounts" },
          ]}
        />
        <SortBy
          options={[
            { value: "name-asc", label: "Sort by name (A-Z)" },
            { value: "name-desc", label: "Sort by name (Z-A)" },
            {
              value: "regularPrice-asc",
              label: "Sort by regular price (low first)",
            },
            {
              value: "regularPrice-desc",
              label: "Sort by regular price (high first)",
            },
            { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
            {
              value: "maxCapacity-desc",
              label: "Sort by capacity (high first)",
            },
          ]}
        />
      </TableOperations>
    </div>
  );
}

export default CabinTableOperations;
