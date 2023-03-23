import { Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col lg={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Order details</th>
              <th>Delivered</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {['bi bi-check-lg text-success', 'bi bi-x-lg text-danger'].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>Ashutosh Kumar</td>
                  <td>2022-12-20</td>
                  <td>
                    <Link to={'/user/order-details'}> order </Link>
                  </td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>$725</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;
