import MaterialTable from 'material-table';


export default function MyTable({ servingWeight, totalFats, protein, cholesterol, sodium }) {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={
          [
            { title: 'Serving Weight', field: 'servingWeight' },
            { title: 'Total Fats', field: 'totalFats' },
            { title: 'Protein', field: 'protein' },
            { title: 'Cholesterol', field: 'cholesterol' },
            { title: 'Sodium', field: 'sodium' },
          ]
        }
        data={[{ servingWeight, totalFats, protein, cholesterol, sodium }]}
        title="Nutritional Facts"
        options={{
          paging: false,
          search: false,
        }}
      
      />
    </div>
  );
}

