import { getRandomDate } from 'utils';

const dataList = [];

for (let i = 0; i < 100; i++) {
  const newItem = {
    id: `100${i + 1}`,
    user_name: 'son bui',
    email: 'sonbui@gmail.com',
    phone: '0912345678',
    address: '181/30 Phan Dang Luu, P1, Q.Phu Nhuan',
    notes: 'Nhanh nhẹn, chịu khó, rất chiều khách,...',
    permissions: ['invoice.view', 'invoice.edit', 'invoice.create', 'task.create'],
  };
  dataList.push(newItem);
}

export default dataList;
