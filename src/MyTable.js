import MaterialTable from 'material-table';


export default function MyTable(props) {
  return (
    <div className='table' style={{ maxWidth: '100%' }}>
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
        // seems like if we're just passing all the data down in an object with all the props, we can just use the props object without destructuring it. we only need to destructure if we need access to each individual part to do something different with it.
        data={[props]}
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

