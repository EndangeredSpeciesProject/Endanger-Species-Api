import MaterialTable from 'material-table';


export default function MyTable({ servingWeight, totalFats, protein, cholesterol, sodium, calories, carbohydrate, fiber, sugar }) {
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
            { title: 'Carbs', field: 'carbohydrate' },
            { title: 'Sugar', field: 'sugar' },
            { title: 'Calories', field: 'calories' },
            { title: 'Fiber', field: 'fiber' },
          ]
        }
        data={[{ servingWeight, totalFats, protein, cholesterol, sodium, carbohydrate, fiber, sugar, calories }]}
        title="Nutritional Facts"
        options={{
          paging: false,
          search: false,
          headerStyle: {
            background: '#8B8972',
            border: '5px solid #F1ECE6'
          },
          rowStyle: {
            background: '#D99326',
            color: 'black'
          }
        }}
      
      />
    </div>
  );
}

