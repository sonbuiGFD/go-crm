import { getRandomDate } from 'utils';

const dataList = [];

for (let i = 0; i < 100; i++) {
  const newItem = {
    id: `100${i + 1}`,
    created_at: getRandomDate(),
    updated_at: getRandomDate(),
    created_by_email: 'System',
    custommer: 'Son Bui',
    task_type: 'renting',
    price_min: 500000,
    price_max: 1000000,
    commission: 10000,
  };
  dataList.push(newItem);
}

export default dataList;
