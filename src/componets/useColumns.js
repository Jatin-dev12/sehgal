import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Brand",
        accessor: "brand"
      },
      {
        Header: "Model",
        accessor: "model"
      },
      {
        Header: "Segment",
        accessor: "segment"
      },
      {
        Header: "Year",
        accessor: "year"
      }
    ],
    []
  );

  return columns;
}
