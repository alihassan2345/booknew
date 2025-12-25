import React from 'react';
import clsx from 'clsx';

const HardwareTable = ({ data, title }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data provided for the hardware table.</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="hardware-table-container">
      <h3>{title}</h3>
      <table className="hardware-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, cellIndex) => (
                <td key={cellIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HardwareTable;