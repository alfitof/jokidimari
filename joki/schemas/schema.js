export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Payment Pending', value: 'Payment Pending'},
          {title: 'In Progress', value: 'In Progress'},
          {title: 'Completed', value: 'Completed'},
        ],
      },
    },
  ],
}
