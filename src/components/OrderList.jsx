import dayjs from "dayjs"
import { useLoaderData } from "react-router-dom"

const OrderList = () => {
  const {orders,meta} = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total orders: {meta.pagination.total}</h4>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <th>Name</th>
            <th>Address</th>
            <th>Products</th>
            <th>Cost</th>
            <th className="hidden sm:block">Data</th>
          </thead>

          <tbody>
            {
              orders.map(order=>{
                const {name,address,orderTotal,numItemsInCart,createdAt} = order.attributes
                return <tr key={order.id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden sm:block">{dayjs(createdAt).format('hh:mm a - MMM, Do, YYYY')}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderList
