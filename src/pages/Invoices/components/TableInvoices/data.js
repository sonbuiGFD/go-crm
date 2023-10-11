import { getRandomDate } from 'utils';

const dataList = [];

for (let i = 0; i < 100; i++) {
  const newItem = {
    id: `100${i + 1}`,
    invoice_number: `#112${i}`,
    serial_number: `#134${i}`,
    invoice_date: getRandomDate(),
    total_payment: 10000,
    payment_amount: 11000,
    created_at: getRandomDate(),
    updated_at: getRandomDate(),
    created_by_email: 'System',
  };
  dataList.push(newItem);
}

export default dataList;
