export default function SpellTable({ table }) {
  return (
    <table>
      {table.caption && <caption>{table.caption}</caption>}
      <thead>
        <tr>
          {table.header.map((cell, index) => (
            <th key={index}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.content.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
