import React from "react";

// ProductTable.js

function ProductTable({ productValues, onValueChange }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Value (Y)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(productValues).map(([label, y]) => (
          <tr key={label}>
            <td>{label}</td>
            <td>
              <input
                type="number"
                value={y}
                onChange={(e) => onValueChange(label, parseInt(e.target.value))}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
