const ResponsiveTable = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "20px 0",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={tableHeaderStyle}>Competencies</th>
            <th style={tableHeaderStyle}>Describe Officer's Achievement</th>
            <th colSpan="5" style={tableHeaderStyle}>
              Score Achieved
            </th>
            <th style={tableHeaderStyle}>Max Score</th>
          </tr>
          <tr>
            <th colSpan="2"></th>
            <th style={tableHeaderStyle}>Q1</th>
            <th style={tableHeaderStyle}>Q2</th>
            <th style={tableHeaderStyle}>Q3</th>
            <th style={tableHeaderStyle}>Q4</th>
            <th style={tableHeaderStyle}>A</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {/* Generic Competencies Section */}
          <tr style={{ background: "#f8f8f8" }}>
            <td colSpan="8" style={{ ...tableCellStyle, fontWeight: "bold" }}>
              Generic Competencies
            </td>
          </tr>

          <TableRow
            competency="Commitment (Ethics and Value Cluster)"
            description="Demonstrates unwavering dedication to the mission and vision of the Ministry, ensuring alignment of personal and team goals with organizational priorities."
            scores={[0, 1]}
          />

          <TableRow
            competency="Commitment (Ethics and Value Cluster)"
            description="Acts in the best interest of the public and the institution, even in challenging circumstances."
            scores={[0, 1]}
          />

          {/* Functional Competencies Section */}
          <tr style={{ background: "#f8f8f8" }}>
            <td colSpan="8" style={{ ...tableCellStyle, fontWeight: "bold" }}>
              Functional Competencies
            </td>
          </tr>

          <TableRow competency="demo" description="123" scores={[0, 1]} />

          {/* Sub Total */}
          <tr>
            <td colSpan="2" style={{ ...tableCellStyle, textAlign: "right" }}>
              Sub Total
            </td>
            <td style={tableCellStyle}>5,500</td>
            <td colSpan="5" style={tableCellStyle}>
              -
            </td>
          </tr>

          {/* Total */}
          <tr>
            <td colSpan="2" style={{ ...tableCellStyle, textAlign: "right" }}>
              Total
            </td>
            <td colSpan="6" style={tableCellStyle}>
              -
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Reusable table row component
const TableRow = ({ competency, description, scores }) => (
  <tr>
    <td style={{ ...tableCellStyle, paddingLeft: "20px" }}>{competency}</td>
    <td style={tableCellStyle}>{description}</td>
    {scores.map((score, index) => (
      <td key={index} style={tableCellStyle}>
        {score}
      </td>
    ))}
    {/* Empty cells for remaining quarters */}
    {[...Array(5 - scores.length)].map((_, index) => (
      <td key={index} style={tableCellStyle}></td>
    ))}
  </tr>
);

// Style constants
const tableHeaderStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

export default ResponsiveTable;
